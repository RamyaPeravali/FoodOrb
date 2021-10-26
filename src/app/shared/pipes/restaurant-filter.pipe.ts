import { Pipe, PipeTransform } from '@angular/core';
import { IRestaurant } from '../Interfaces/restaurant';

@Pipe({
  name: 'restaurantFilter'
})
export class RestaurantFilterPipe implements PipeTransform {

  transform(value: IRestaurant[], filterString:string): any {
    if(value.length === 0 || filterString === ''){
      return value;
    }
    const result = [];
    for (const item of value) {
      
      if(item.name.toLocaleLowerCase().match(filterString.toLocaleLowerCase())){
        result.push(item)
      }

    }
    return result;
  }

}
