import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Hike } from '../../shared/hike.model';
import { HikeService } from '../hike.service';

@Component({
  selector: 'app-hike-detail',
  templateUrl: './hike-detail.component.html',
  styleUrls: ['./hike-detail.component.css']
})
export class HikeDetailComponent implements OnInit {
  hike: Hike;
  id: number;

  constructor(private hikeService: HikeService,
              private route: ActivatedRoute,
              private router: Router) {
}

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.hike = this.hikeService.getHike(this.id);
        }
      );
  }

  onAddHike() {}

  onEditHike() {}

  onDeleteHike() {}

}
