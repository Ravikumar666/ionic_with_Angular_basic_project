import { Injectable } from '@angular/core';
import { Place } from './offers/place.model';
import { AuthService } from '../auth/auth.service';
import { BehaviorSubject, Observable, map, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private _places = new BehaviorSubject<Place[]>([
    {
      id: 'p1',
      title: 'nellore',
      discription: 'good for fish curry',
      imgUrl:
        'https://assets.thehansindia.com/h-upload/2020/07/23/985774-lockdown-in-nellore.webp',
      price: '1400',
      availableFrom: new Date('2019-01-01'),
      availableTo: new Date('2019-12-31'),
      userId: '',
    },
    {
      id: 'p2',
      title: 'kavali',
      discription: 'good for Shoping cotton dress',
      imgUrl:
        'https://blog.crisscrosstamizh.in/wp-content/uploads/2022/04/kavali-768x576.jpg',
      price: '1500',
      availableFrom: new Date('2019-01-01'),
      availableTo: new Date('2019-12-31'),
      userId: '',
    },
    {
      id: 'p3',
      title: 'tirupati',
      discription: 'good for visit temples',
      imgUrl:
        'https://www.fabhotels.com/blog/wp-content/uploads/2019/03/Sri-Venkateswara-Swamy-Temple-Tirumala.jpg',
      price: '1200',
      availableFrom: new Date('2019-01-01'),
      availableTo: new Date('2019-12-31'),
      userId: '',
    },
  ]);
  constructor(private auth: AuthService) {}

  get Place(): Observable<Place[]> {
    return this._places.asObservable();
  }

  getPlace(id: string | null): any {
    return this.Place.pipe(
      take(1),
      map((places) => {
        return { ...places.find((p) => p.id === id) };
      })
    );
  }

  addPlace(
    title: string,
    discription: string,
    price: string,
    datadFrom: Date,
    dateTo: Date
  ) {
    const randomImgUrl =
      'https://www.fabhotels.com/blog/wp-content/uploads/2019/03/Sri-Venkateswara-Swamy-Temple-Tirumala.jpg';
    const newPlace = new Place(
      Math.random().toString(),
      title,
      discription,
      randomImgUrl,
      price,
      datadFrom,
      dateTo,
      this.auth.userId
    );
    this.Place.pipe(take(1)).subscribe((places) => {
      this._places.next(places.concat(newPlace));
    });
  }
}
