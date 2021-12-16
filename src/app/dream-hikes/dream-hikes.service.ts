import { Injectable } from "@angular/core";

import { Subject } from "rxjs";

import { Hike } from "../shared/hike.model";


@Injectable({
  providedIn: 'root'
})
export class DreamHikeService {
  dreamHikesChanged = new Subject<Hike[]>();
  private dreamHikes: Hike[] = [];
  dreamHike: Hike;

  constructor () {
  }

  getHikes() {
    return this.dreamHikes.slice();
  }

  getHike(index: number) {
    return this.dreamHikes[index];
  }

  addHike(hike: Hike) {
    this.dreamHike = hike;
    this.dreamHikes.push(this.dreamHike);
    console.table(this.dreamHikes);
    this.dreamHikesChanged.next(this.dreamHikes.slice());
    return this.dreamHikes;
  }


}

