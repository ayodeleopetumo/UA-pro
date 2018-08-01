import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uppercaseTransform'
})
export class AuthFormPipe implements PipeTransform {
  transform(value: string) {
    return value.toUpperCase();
  }
}
