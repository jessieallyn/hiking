import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { throwError, BehaviorSubject } from 'rxjs';
import { User } from './user.model';
import { environment } from 'src/environments/environment';

export interface AuthResponseData {
  idToken: string;
  email: string;
  firstName: string;
  lastName: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user = new BehaviorSubject<User>(null);
  private tokenExpirationTimer: any;

  constructor(private http: HttpClient, private router: Router) { }

  //Login function that prepares & returns the observable
  login(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + environment.firebase.API_KEY,
      {
      email: email,
      password: password,
      returnSecureToken: true
      }
    )
    .pipe(
      catchError(this.handleError),
      tap((resData: AuthResponseData) => {
        this.handleAuthentication(
          resData.email,
          resData.localId,
          resData.firstName,
          resData.lastName,
          resData.idToken,
          +resData.expiresIn
        );
      })
    );
  }

  autoLogin() {
    const userData: {
      email: string;
      id: string;
      firstName: string;
      lastName: string;
      _token: string;
      _tokenExpirationDate: string;
    } = JSON.parse(localStorage.getItem('userData'));
    if (!userData) {
      return;
    }

    const loadedUser = new User(
      userData.email,
      userData.id,
      userData.firstName,
      userData.lastName,
      userData._token,
      new Date(userData._tokenExpirationDate)
      );

    if (loadedUser.token) {
      this.user.next(loadedUser);
      const expirationDuration =
        new Date(userData._tokenExpirationDate).getTime() -
        new Date().getTime();
      this.autoLogout(expirationDuration)
    }
  }

  logout() {
    this.user.next(null);
    this.router.navigate(['/login']);
    localStorage.removeItem('userData');
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
    }
    this.tokenExpirationTimer = null;
  }

  autoLogout(expirationDuration: number) {
    this.tokenExpirationTimer = setTimeout(() => {
      this.logout();
    }, expirationDuration);
  }

  //authentication handling function
  private handleAuthentication(
    email: string,
    userId: string,
    firstName: string,
    lastName: string,
    token: string,
    expiresIn: number
    ) {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const user = new User(email, userId, firstName, lastName, token, expirationDate);
    this.user.next(user);
    localStorage.setItem('userData', JSON.stringify(user));
  }

    //error handling function
    private handleError(errorRes: HttpErrorResponse) {
      let errorMessage = 'An error occured!';
      if (!errorRes.error || !errorRes.error.error) {
        //previous recommendation was to return throwError from rxjs but it has been deprecated
        return throwError(() => new Error(errorMessage));
      }
        switch (errorRes.error.error.message) {
          case 'EMAIL_NOT_FOUND':
            errorMessage = 'This email not found';
            break;
          case 'INVALID_PASSWORD':
            errorMessage = 'Invalid password';
            break;
          case 'THIS_USER_DISABLED':
            errorMessage = 'This user has been disabled by an adminstrator';
        }
        return throwError(() => new Error(errorMessage));
      }
}
