import { Injectable } from '@angular/core';
import { RestaurantInfo } from './restaurantinfo';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor() { }
  getRestaurants(): RestaurantInfo[]{
    let restaurants1 : RestaurantInfo = {
      id : '1',
      nom : 'Le resto chic',
      adresse : '3 rue des liondards, 6300 clermont-ferrand'
    }
    let restaurants = [];
    restaurants.push(restaurants1) ;
    return restaurants;
  }
}
