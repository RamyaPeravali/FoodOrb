import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IRestaurant } from '../shared/Interfaces/restaurant';
import { ListRestaurantsService } from './services/list-restaurants.service';

@Component({
  selector: 'app-list-restaurants',
  templateUrl: './list-restaurants.component.html',
  styles: [
  ]
})
export class ListRestaurantsComponent implements OnInit {

  restaurantList: IRestaurant[] = [];
  public filterRestaurantName: string;
  searchLocationForm = new FormGroup ({
    location: new FormControl('', Validators.required ),
  });

  passUserId = this.route.snapshot.queryParamMap.get('userId');

  constructor( private restaurantService: ListRestaurantsService, private router: Router, private route: ActivatedRoute ) { 
    this.filterRestaurantName = '';
  }

  ngOnInit(): void {
    this.restaurantService.getRestaurants()
      .subscribe( (res: any) => {
        this.restaurantList = res;
    });
  }

  orderHereHandler(restaurant: IRestaurant): void {
    this.router.navigate(['/listmenu'], {queryParams: {userId: this.passUserId, resId: restaurant.id}});
  }

  handleSearchLocationSubmit(): void {
    this.router.navigate(['/listrestaurants'], {queryParams: {userId: this.passUserId}});
  }

}
