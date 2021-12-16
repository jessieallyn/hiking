import { EventEmitter, Injectable } from "@angular/core";
import { Hike } from "../shared/hike.model";

@Injectable({
  providedIn: 'root'
})

export class HikeService {
  hikeSelected = new EventEmitter<Hike>();

  private myHikes: Hike[] = [
    new Hike(
      'Idaho',
      'Mesa Falls',
      'assets/woods.mesafalls.2013.jpg'
    ),
    new Hike(
      'Missouri',
      'Pickle Springs',
      'assets/woods.picklesprings.2020.jpg'
    ),
    new Hike(
      'Kansas',
      'Horsethief Canyon',
      'assets/woods.horsethiefcanyon.2018.jpg'
    )];

 constructor(){ }

  getHikes() {
    return this.myHikes.slice();
  }

  getHike(index: number) {
    return this.myHikes[index];
  }

}
