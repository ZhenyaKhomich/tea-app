import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sliceString',
  standalone: false,
})
export class SliceStringPipe implements PipeTransform {

  transform(value: string): string {
    return value.length > 566 ? value.slice(0, 573) + '...' : value;
  }
}
