import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HikesComponent } from './hikes/hikes.component';
import { HikeDetailComponent } from './hikes/hike-detail/hike-detail.component';
import { HikeStartComponent } from './hikes/hike-start/hike-start.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { DreamHikesComponent } from './dream-hikes/dream-hikes.component';
import { PrintLayoutComponent } from './print-layout/print-layout.component';
import { ListComponent } from './print-layout/list/list.component';
import { DreamHikeListComponent } from './dream-hikes/dream-hike-list/dream-hike-list.component';

const appRoutes: Routes = [
 { path: '', redirectTo: '/hikes', pathMatch: 'full' },
 { path: 'hikes', component: HikesComponent, children: [
   { path: '', component: HikeStartComponent },
   { path: ':id', component: HikeDetailComponent }
 ] },
 {
   path: 'dream-hikes', component: DreamHikesComponent, children: [
     { path: '', component: DreamHikeListComponent }
   ]
 },
 {
  path: 'print', component: PrintLayoutComponent,
  children: [
    { path: 'list', component: ListComponent }
  ]
  },
 { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'} },
 { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


