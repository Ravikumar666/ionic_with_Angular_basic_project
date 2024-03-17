import { Injectable } from '@angular/core';
import { Place } from './offers/place.model';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private _places: Place[] = [
    {
      id: 'p1',
      title: 'nellore',
      discription: 'good for fish curry',
      imgUrl:
        'https://assets.thehansindia.com/h-upload/2020/07/23/985774-lockdown-in-nellore.webp',
      price: '1400',
    },
    {
      id: 'p2',
      title: 'kavali',
      discription: 'good for Shoping cotton dress',
      imgUrl:
        'https://blog.crisscrosstamizh.in/wp-content/uploads/2022/04/kavali-768x576.jpg',
      price: '1500',
    },
    {
      id: 'p3',
      title: 'tirupati',
      discription: 'good for visit temples',
      imgUrl:
        'https://www.fabhotels.com/blog/wp-content/uploads/2019/03/Sri-Venkateswara-Swamy-Temple-Tirumala.jpg',
      price: '1200',
    },
  ];
  constructor() {}

  get Place(): Place[] {
    return [...this._places];
  }

  getPlace(id: string | null): any {
    return {
      ...this._places.find((p) => {
        return p.id === id;
      }),
    };
  }
}
