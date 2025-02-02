import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mycustompipe'
})
export class MycustompipePipe implements PipeTransform {

  transform(value: string, args: any): string{
    if (!value) return '';
    return value.toLowerCase();
  }

}
