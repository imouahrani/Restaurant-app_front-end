import { Injectable } from '@angular/core';
import { RestaurantInfo } from './restaurantinfo';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http' ;
@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private httpClient : HttpClient) { }
  getRestaurants(): Observable<RestaurantInfo[]>{
    
    return this.httpClient.get<RestaurantInfo[]>('http://localhost:8080/restaurants');
  }
}
