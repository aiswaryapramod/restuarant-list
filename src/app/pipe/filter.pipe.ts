import { Pipe, PipeTransform } from '@angular/core';
import { empty } from 'rxjs';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(restaurants:any[],filterString:string,propName:string){
    const result:any=[];
    if(!restaurants || filterString=='' || propName==''){
      return restaurants
    }
    restaurants.forEach((restuarant:any)=>{
       if (restuarant[propName].trim().toLowerCase().includes(filterString)){//toLowerCase is  used to covert string in to lowercase
        result.push(restuarant)
       } 
       
    })
    return result;
  }

}
