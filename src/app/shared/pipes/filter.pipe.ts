import { Pipe, PipeTransform } from '@angular/core';
import { IFoodCritics } from '../Interfaces/food-critics';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: IFoodCritics[], filterString:string): any {
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
