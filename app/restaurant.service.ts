import { Injectable } from '@angular/core';
import { RestaurantInfo } from './restaurantinfo';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http' ;
import { environment } from 'src/environements/environement';
@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private httpClient : HttpClient) { }
  getRestaurants(): Observable<RestaurantInfo[]>{
    
    return this.httpClient.get<RestaurantInfo[]>(environment.apiUrl + '/restaurants');
  }
}
