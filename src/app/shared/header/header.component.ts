import {Component, inject} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: false
})
export class HeaderComponent {
  router: Router = inject(Router);
  value: string = '';

  search() {
    this.router.navigate(['/catalog'], {queryParams: {search: this.value}});
    this.value = '';
  }
}
