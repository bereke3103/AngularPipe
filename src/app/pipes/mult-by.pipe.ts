import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mult',
})
export class MultByPipe implements PipeTransform {
  transform(num: number, pow: number = 5) {
    return num * pow;
  }
}
