import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

import { DreamHikeService } from '../dream-hikes.service';
import { Hike } from 'src/app/shared/hike.model';

@Component({
  selector: 'app-dream-hike-add',
  templateUrl: './dream-hike-add.component.html',
  styleUrls: ['./dream-hike-add.component.css']
})
export class DreamHikeAddComponent implements OnInit {
 hikeForm: FormGroup;
 hike: Hike;

  constructor(private dreamHikeService: DreamHikeService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.hikeForm = new FormGroup({
      'location': new FormControl(null),
      'name': new FormControl(null),
      'imagePath': new FormControl(null)
    });
  }

  onSubmit(formData: { location: string, name: string, imagePath: string }) {
    console.log(this.hikeForm);
    this.dreamHikeService.addHike(formData);
  }

}
