import { Component, OnInit } from '@angular/core';
import { RestaurantInfo } from '../restaurantinfo';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent implements OnInit{
  restaurants : RestaurantInfo[] | undefined;

  ngOnInit(): void {
    let restaurants1 : RestaurantInfo = {
      id : '1',
      nom : 'Le resto chic',
      adresse : '3 rue des liondards, 6300 clermont-ferrand'
    }
    this.restaurants = [];
    this.restaurants.push(restaurants1) ;
  }

}
