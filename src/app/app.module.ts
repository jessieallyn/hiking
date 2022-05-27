import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HikesComponent } from './hikes/hikes.component';
import { HikeListComponent } from './hikes/hike-list/hike-list.component';
import { HikeService } from './hikes/hike.service';
import { HikeItemComponent } from './hikes/hike-list/hike-item/hike-item.component';
import { HikeDetailComponent } from './hikes/hike-detail/hike-detail.component';
import { HikeStartComponent } from './hikes/hike-start/hike-start.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { DreamHikesComponent } from './dream-hikes/dream-hikes.component';
import { PrintLayoutComponent } from './print-layout/print-layout.component';
import { ListComponent } from './print-layout/list/list.component';
import { DreamHikeListComponent } from './dream-hikes/dream-hike-list/dream-hike-list.component';
import { DreamHikeItemComponent } from './dream-hikes/dream-hike-list/dream-hike-item/dream-hike-item.component';
import { DreamHikeAddComponent } from './dream-hikes/dream-hike-add/dream-hike-add.component';
import { MapComponent } from './map/map.component';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HikesComponent,
    HikeListComponent,
    HikeItemComponent,
    HikeDetailComponent,
    HikeStartComponent,
    ErrorPageComponent,
    DreamHikesComponent,
    PrintLayoutComponent,
    ListComponent,
    DreamHikeListComponent,
    DreamHikeItemComponent,
    DreamHikeAddComponent,
    MapComponent,
    HomeComponent,
    AuthComponent,

    ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [HikeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
