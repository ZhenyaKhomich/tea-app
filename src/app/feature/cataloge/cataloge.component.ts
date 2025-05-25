import {Component, inject, OnInit} from '@angular/core';
import {HttpService} from '../../services/http-service.service';
import {ProductsType} from '../../types/products.type';
import {map, tap} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'cataloge',
  standalone: false,
  templateUrl: './cataloge.component.html',
  styleUrl: './cataloge.component.scss'
})
export class CatalogeComponent implements OnInit {
  httpService: HttpService = inject(HttpService);
  activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  products: ProductsType[] = [];
  isLoading: boolean = false;
  noProducts: boolean = false;


  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.isLoading = true;
      if (params['search']) {
        this.httpService.getProducts()
          .pipe(
            tap(() => this.isLoading = false),
            map((products) => {
              return products.filter((product: ProductsType) => (product.description.toLowerCase().includes(params['search'].toLowerCase())) ||
                (product.title.toLowerCase().includes(params['search'].toLowerCase())));
            })
          ).subscribe({
          next: (products) => {
            if (products.length === 0) {
              this.noProducts = true;
              this.products = [];
            } else {
              this.noProducts = false;
              this.products = products;
            }
          },
          error: (err) => {
            console.log('Ошибка в получении товаров в cataloge.component')
          }
        });
      } else {
        this.noProducts = false;
        this.httpService.getProducts()
          .pipe(
            tap(() => this.isLoading = false),
          ).subscribe({
          next: (products) => {
            this.products = products;
          },
          error: (err) => {
            console.log('Ошибка в получении товаров в cataloge.component')
          }
        });
      }
    })
  }
}
