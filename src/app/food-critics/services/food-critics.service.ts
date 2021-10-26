import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IFoodCritics } from 'src/app/shared/Interfaces/food-critics';

@Injectable({
  providedIn: 'root'
})
export class FoodCriticsService {

  constructor(private http: HttpClient) { }

  getFoodCriticList(): Observable<any> {
    return this.http.get('http://localhost:3000/foodCritics')
    .pipe( map( (res:any)=> {
      return res;
    }))
  }

  followFoodCritic(foodCritic: IFoodCritics):Observable<any> {
    return this.http.put('http://localhost:3000/foodCritics/'+foodCritic.id,foodCritic)
    .pipe( map( (res:any) => {
      return res;
    }))
  }
}
