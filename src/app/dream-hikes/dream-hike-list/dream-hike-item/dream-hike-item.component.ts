import { Component, Input } from '@angular/core';

import { Hike } from 'src/app/shared/hike.model';

@Component({
  selector: 'app-dream-hike-item',
  templateUrl: './dream-hike-item.component.html',
  styleUrls: ['./dream-hike-item.component.css']
})
export class DreamHikeItemComponent {
  @Input() hike: Hike;
  @Input() index: number;

  constructor() {
  }

}
