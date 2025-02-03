import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kebabCase'
})
export class KebabCasePipe implements PipeTransform {
  transform(value: string, format: string): string {
    let msg = `My custom transform of ${value}`;
    
    if (format === 'uppercase') {
      return msg.toUpperCase();
    } else {
      return msg
    }
 }
}
