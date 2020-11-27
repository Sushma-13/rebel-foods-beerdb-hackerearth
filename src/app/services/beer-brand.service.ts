import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Beercraft, Beerimages } from '../model';

@Injectable({
  providedIn: 'root',
})
export class BeerBrandService {
  constructor(private http: HttpClient) {}

  getBeercraft(): Observable<Beercraft[]> {
    return this.http.get<Beercraft[]>(
      'https://s3-ap-southeast-1.amazonaws.com/he-public-data/beercraft5bac38c.json'
    );
  }

  getBeerimages(): Observable<Beerimages[]> {
    return this.http.get<Beerimages[]>(
      'https://s3-ap-southeast-1.amazonaws.com/he-public-data/beerimages7e0480d.json'
    );
  }
}
