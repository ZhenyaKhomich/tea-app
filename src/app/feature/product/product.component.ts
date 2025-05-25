import {Component, inject, OnInit} from '@angular/core';
import {ProductsType} from '../../types/products.type';
import { map, tap} from 'rxjs';
import {HttpService} from '../../services/http-service.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'product',
  standalone: false,
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit {
  isLoading: boolean = false;
  product: ProductsType | undefined = undefined;
  httpService: HttpService = inject(HttpService);
  activatedRoute: ActivatedRoute = inject(ActivatedRoute);

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.isLoading = true;
      this.httpService.getProducts()
        .pipe(
          map((products) => {
            return products.find((product: ProductsType) => product.id === +params['id'])
          }),
          tap(() => this.isLoading = false),
        ).subscribe({
        next: (product) => {
          this.product = product;
        },
        error: (err) => {
          console.log('Ошибка в получении товаров в product.component')
        }
      });
    })
  }
}
