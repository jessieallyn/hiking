import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Hike } from '../../shared/hike.model';
import { HikeService } from '../hike.service';

@Component({
  selector: 'app-hike-list',
  templateUrl: './hike-list.component.html',
  styleUrls: ['./hike-list.component.css']
})
export class HikeListComponent implements OnInit {
  hikes: Hike[];

  constructor(private hikeService: HikeService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.hikes = this.hikeService.getHikes();
  }

// onNewHike() {
//     this.router.navigate(['new'], {relativeTo: this.route});
//   }
}
