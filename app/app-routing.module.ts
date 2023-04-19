import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { RestaurantsComponent } from './restaurants/restaurants.component';

const appRoutes: Routes = [
  // afficher le component restaurant sur /restaurants
  { path: 'restaurants', component: RestaurantsComponent },
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