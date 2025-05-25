import { Component, OnInit} from '@angular/core';
declare var WOW: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: false
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    new WOW({
      animateClass: 'animate__animated',
    }).init();
  }
}
