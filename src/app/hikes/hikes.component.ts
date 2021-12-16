import { Component, OnInit } from '@angular/core';

import { Hike } from '../shared/hike.model';
import { HikeService } from './hike.service';

@Component({
  selector: 'app-hikes',
  templateUrl: './hikes.component.html',
  styleUrls: ['./hikes.component.css'],
  providers: [HikeService]
})
export class HikesComponent implements OnInit {
  selectedHike: Hike;

  constructor(private hikeService: HikeService) { }

  ngOnInit() {
    this.hikeService.hikeSelected
    .subscribe(
      (hike: Hike) => {
        this.selectedHike = hike;
      }
    );
  }

}
