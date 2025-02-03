import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mycustompipe',
})
export class MycustompipePipe implements PipeTransform {
  transform(value: string | null | undefined): string {
    if (!value) return '';
    return value.toLowerCase();
  }
}
