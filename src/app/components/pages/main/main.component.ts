import {Component, ElementRef, inject, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {DOCUMENT, NgIf} from '@angular/common';
import { Subscription, timer} from 'rxjs';
import {RouterLink} from '@angular/router';
declare var $: any;
@Component({
  selector: 'main',
  standalone: true,
  imports: [
    NgIf,
    RouterLink
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit, OnDestroy {
  isModalOpen = false;
  render: Renderer2 = inject(Renderer2);
  document: Document = inject(DOCUMENT);
  modal!: Subscription;



  ngOnInit() {
    $('.your-class').slick();
    $("#accordion").accordion({
      heightStyle: "content"
    });

    this.modal = timer(10000).subscribe(() => {
        this.isModalOpen = true;
        this.render.setStyle(this.document.body, "overflow", "hidden");
      }
    )
  }

  ngOnDestroy() {
    this.modal.unsubscribe();
    this.render.setStyle(this.document.body, "overflow", "");
  }

  modalClose() {
    this.isModalOpen = false;
    this.render.setStyle(this.document.body, "overflow", "");
  }
}
