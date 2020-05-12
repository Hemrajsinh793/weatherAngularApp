import { Injectable } from '@angular/core';
import { City } from '../interfaces/city';
import { CITIES } from 'src/app/mocks/cities.mock';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  getCities():Array<City>{
    return CITIES;  // method returns an array of cities

  }
}
