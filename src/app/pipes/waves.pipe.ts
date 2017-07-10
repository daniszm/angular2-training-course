import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'waves'
})
export class WavesPipe implements PipeTransform{
  transform(value: any, ...args: any[]): any {
  let result = '';

    for(let i=0; i< value.length; i++) {
      if(i % 2 === 0) {
        result += value[i].toUpperCase()
      } else {
        result += value[i];
      }
    }
    return result;
  }
}
