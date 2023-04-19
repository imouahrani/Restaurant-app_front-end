import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';

const appRoutes: Routes = [
  // afficher le component restaurant sur /restaurants
  { path: 'restaurants', component: RestaurantsComponent },
  {path: 'restaurants/:id', component : RestaurantDetailComponent},
  // redirection par défaut sur /restaurants
  {path: '**', redirectTo:'/restaurants'}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }