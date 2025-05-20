import {Component, inject} from '@angular/core';
import {Router, RouterLink, RouterLinkActive} from '@angular/router';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'header-component',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    FormsModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  router: Router = inject(Router);
  value: string = '';

  search() {
    this.router.navigate(['/catalog'], {queryParams: {search: this.value}});
    this.value = '';
  }
}
