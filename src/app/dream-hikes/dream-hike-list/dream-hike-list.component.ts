import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Hike } from 'src/app/shared/hike.model';
import { DreamHikeService } from '../dream-hikes.service';

@Component({
  selector: 'app-dream-hike-list',
  templateUrl: './dream-hike-list.component.html',
  styleUrls: ['./dream-hike-list.component.css']
})
export class DreamHikeListComponent implements OnInit {
  dreamHike: Hike;
  dreamHikes: Hike[];
  private subscription: Subscription;

  constructor(private dreamHikeService: DreamHikeService,
              private router: Router,
              private route: ActivatedRoute) {
               }

  ngOnInit(): void {
      this.dreamHikes = this.dreamHikeService.getHikes();
      this.subscription = this.dreamHikeService.dreamHikesChanged
        .subscribe({next: (dreamHikes: Hike[]) => {
          this.dreamHikes = dreamHikes;
          }
        });
    }

    //subscribe to observable
    // this.dreamHikeService.myObservable.subscribe(something => {
    //   console.log(something)
    //   console.log("complete")
    // })

  getDreamHikes(): void {
    this.dreamHikes = this.dreamHikeService.getHikes();
  }

  onNewHike(location, name, imagePath) {
    this.router.navigate(['new'], {relativeTo: this.route});
    this.dreamHikeService.addHike(this.dreamHike);
  }
}
