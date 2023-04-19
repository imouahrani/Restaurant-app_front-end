import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { RestaurantInfo } from '../restaurantinfo';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent implements OnInit{
  restaurants : RestaurantInfo[] | undefined;
  constructor(private restaurantService : RestaurantService){}

  ngOnInit(): void {
     this.restaurantService.getRestaurants().subscribe(
      reponse => {
          this.restaurants = reponse;
      }
    )
  }
}
