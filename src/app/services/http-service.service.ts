import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProductsType} from '../types/products.type';
import {Observable} from 'rxjs';
import {FormType} from '../types/formType';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor() { }
  http = inject(HttpClient);

  getProducts(): Observable<ProductsType[]> {
   return this.http.get<ProductsType[]>('https://testologia.ru/tea')
  }

  sendForm(object: FormType) {
    return this.http.post<{success: number}>('https://testologia.ru/order-tea', object)
  }
}
