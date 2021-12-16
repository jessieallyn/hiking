import { Component, Input } from '@angular/core';

import { Hike } from '../../../shared/hike.model';

@Component({
  selector: 'app-hike-item',
  templateUrl: './hike-item.component.html',
  styleUrls: ['./hike-item.component.css']
})

export class HikeItemComponent {
  @Input() hike: Hike;
  @Input() index: number;

  constructor() {
  }

}
