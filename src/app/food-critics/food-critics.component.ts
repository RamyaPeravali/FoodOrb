import { Component, OnInit } from '@angular/core';
import { IFoodCritics } from '../shared/Interfaces/food-critics';
import { FoodCriticsService } from './services/food-critics.service';

@Component({
  selector: 'app-food-critics',
  templateUrl: './food-critics.component.html',
  styleUrls: ['./food-critics.component.css']
})
export class FoodCriticsComponent implements OnInit {

  foodCriticList: IFoodCritics[] = [];
  public filterName: string;
  constructor(private foodCriticsService: FoodCriticsService) { 
    this.filterName = '';
  }

  public ngOnInit(): void {
    this.foodCriticsService.getFoodCriticList().subscribe( (res:any) =>{
      this.foodCriticList = res;
    })
  }

  followFoodCriticHandler(foodCritic: IFoodCritics) {
    foodCritic.follow = true;
    this.foodCriticsService.followFoodCritic(foodCritic)
    .subscribe( (res:any) => {
      console.log(res);
    })
  }

  removeFoodCriticHandler(foodCritic: IFoodCritics) {
    foodCritic.follow = false;
    this.foodCriticsService.followFoodCritic(foodCritic)
      .subscribe( (res: any) => {
        console.log(res);
      });
  }

}
