import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exponentialStrengh'
})
export class ExponentialStrenghPipe implements PipeTransform {

  transform(value: number, exponent = 1): number {
    return Math.pow(value, exponent);
  }

}
