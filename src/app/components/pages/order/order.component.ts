import {AfterViewInit, Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgIf} from '@angular/common';
import {ValidatorCustom} from '../../../validator/validator-custom';
import {HttpService} from '../../../services/http-service.service';
import {tap} from 'rxjs';

@Component({
  selector: 'order',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf,
    RouterLink
  ],
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss'
})
export class OrderComponent implements OnInit {
  activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  fb: FormBuilder = inject(FormBuilder);
  httpService: HttpService = inject(HttpService);
  orderForm!: FormGroup;
  sendFormOk: boolean = false;
  sendFormError: boolean = false;
  sendFormInValid: boolean = false;
  isLoading: boolean = false;

  ngOnInit() {
    this.orderForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern('^[a-zA-Zа-яА-ЯёЁ]+$')]],
      last_name: ['', [Validators.required, Validators.pattern('^[a-zA-Zа-яА-ЯёЁ]+$')]],
      phone: ['', [Validators.required, ValidatorCustom.validatorPhone]],
      country: ['', [Validators.required, Validators.pattern('^[a-zA-Zа-яА-ЯёЁ]+$')]],
      zip: ['', [Validators.required, Validators.pattern('^[0-9]{6}$')]],
      product: ['', Validators.required],
      address: ['', [Validators.required, Validators.pattern(/^[a-zA-Zа-яА-ЯёЁ0-9\s\-\/]+$/)]],
      comment: [''],
    })

    this.activatedRoute.queryParams.subscribe(params => {
      this.orderForm.patchValue({
        product: params['title']
      })
    })
  }

  get orderName() {return this.orderForm.get('name')}
  get orderNameInvalid() {return this.orderName?.invalid}
  get orderNameTouchedAndDirty() {return (this.orderName?.touched || this.orderName?.dirty)}
  get orderNameErrorsRequired() {return this.orderName?.errors?.['required']}
  get orderNameErrorsPattern() {return this.orderName?.errors?.['pattern']}
  get orderLastName() {return this.orderForm.get('last_name')}
  get orderLastNameInvalid() {return this.orderLastName?.invalid}
  get orderLastNameTouchedAndDirty() {return (this.orderLastName?.touched || this.orderLastName?.dirty)}
  get orderLastNameErrorsRequired() {return this.orderLastName?.errors?.['required']}
  get orderLastNameErrorsPattern() {return this.orderLastName?.errors?.['pattern']}
  get orderPhone() {return this.orderForm.get('phone')}
  get orderPhoneInvalid() {return this.orderPhone?.invalid}
  get orderPhoneTouchedAndDirty() {return (this.orderPhone?.touched || this.orderPhone?.dirty)}
  get orderPhoneErrorsRequired() {return this.orderPhone?.errors?.['required']}
  get orderPhoneErrorsPattern() {return this.orderPhone?.errors?.['phoneValidation']}
  get orderCountry() {return this.orderForm.get('country')}
  get orderCountryInvalid() {return this.orderCountry?.invalid}
  get orderCountryTouchedAndDirty() {return (this.orderCountry?.touched || this.orderCountry?.dirty)}
  get orderCountryErrorsRequired() {return this.orderCountry?.errors?.['required']}
  get orderCountryErrorsPattern() {return this.orderCountry?.errors?.['pattern']}
  get orderZip() {return this.orderForm.get('zip')}
  get orderZipInvalid() {return this.orderZip?.invalid}
  get orderZipTouchedAndDirty() {return (this.orderZip?.touched || this.orderZip?.dirty)}
  get orderZipErrorsRequired() {return this.orderZip?.errors?.['required']}
  get orderZipErrorsPattern() {return this.orderZip?.errors?.['pattern']}
  get orderAddress() {return this.orderForm.get('address')}
  get orderAddressInvalid() {return this.orderAddress?.invalid}
  get orderAddressTouchedAndDirty() {return (this.orderAddress?.touched || this.orderAddress?.dirty)}
  get orderAddressErrorsRequired() {return this.orderAddress?.errors?.['required']}
  get orderAddressErrorsPattern() {return this.orderAddress?.errors?.['pattern']}

  submitForm() {
    if (this.orderForm.valid) {
      this.isLoading = true;
      this.sendFormInValid = false;
      this.sendFormError = false;

      this.httpService.sendForm({
        name: this.orderForm.controls['name'].value,
        last_name: this.orderForm.controls['last_name'].value,
        phone: this.orderForm.controls['phone'].value,
        country: this.orderForm.controls['country'].value,
        zip: this.orderForm.controls['zip'].value,
        product: this.orderForm.controls['product'].value,
        address: this.orderForm.controls['address'].value,
        comment: this.orderForm.controls['comment'].value,
      }).pipe(
        tap(() => this.isLoading = false)
      ).subscribe((response) => {
        if (response.success) {
          this.sendFormOk = true;
        } else {
          this.sendFormError = true;
        }
      })
    } else {
      this.sendFormInValid = true;
    }
  }
}
