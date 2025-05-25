import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainComponent} from './main.component';
import {RouterLink} from '@angular/router';
import {
  NgbAccordionBody,
  NgbAccordionButton, NgbAccordionCollapse,
  NgbAccordionDirective,
  NgbAccordionHeader,
  NgbAccordionItem
} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    MainComponent,
  ],
  imports: [
    CommonModule,
    RouterLink,
    NgbAccordionItem,
    NgbAccordionHeader,
    NgbAccordionDirective,
    NgbAccordionButton,
    NgbAccordionCollapse,
    NgbAccordionBody,
  ]
})
export class MainModule { }
