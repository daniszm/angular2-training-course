import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(arr: {}[], name: string): any {
    if (arr && name) {
      return arr.filter((item)=>{
        return item['name'].toUpperCase().includes(name).toUpperCase();
      });
    }
    return arr;
  }

}
