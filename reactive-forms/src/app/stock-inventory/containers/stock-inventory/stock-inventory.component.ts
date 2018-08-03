import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

import { Product } from '../../models/products.interface';

@Component({
  selector: 'app-stock-inventory',
  styleUrls: ['stock-inventory.component.scss'],
  template: `
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <app-stock-branch [parent]="form"></app-stock-branch>
      <app-stock-selector [parent]="form" [products]="products" (added)="addStock($event)"></app-stock-selector>
      <app-stock-products [parent]="form" (removed)="removeStock($event)"></app-stock-products>

      <div class="stock-inventory__button">
        <button
          type="submit"
          [disabled]="form.invalid">Order stock</button>
      </div>
    </form>

    <pre>{{ form.value | json }}</pre>
  `
})
export class StockInventoryComponent implements OnInit {
  products: Product[] = [
    { id: 1, price: 3200, name: 'MacBook Pro' },
    { id: 2, price: 3400, name: 'MacBook' },
    { id: 3, price: 3800, name: 'iPhone' },
    { id: 4, price: 3000, name: 'Surface Book Pro' },
    { id: 5, price: 4000, name: 'iPad Pro' }
  ];

  // Independent form builder API
  // form = new FormGroup({
  //   store: new FormGroup({
  //     branch: new FormControl(''),
  //     code: new FormControl('')
  //   }),
  //   selector: this.createStock({}),
  //   stock: new FormArray([
  //     this.createStock({ product_id: 3, quantity: 50 }),
  //     this.createStock({ product_id: 5, quantity: 150 }),
  //     this.createStock({ product_id: 2, quantity: 500 })
  //   ])
  // });

  // Combined form builder API
  form = this.formBuilder.group({
    store: this.formBuilder.group({
      branch: '',
      code: ''
    }),
    selector: this.createStock({}),
    stock: new FormArray([
      this.createStock({ product_id: 3, quantity: 50 }),
      this.createStock({ product_id: 5, quantity: 150 }),
      this.createStock({ product_id: 2, quantity: 500 })
    ])
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {}

  onSubmit() {
    console.log('Submitted: ', this.form.value);
  }

  createStock(stock) {
    return this.formBuilder.group({
      product_id: parseInt(stock.product_id, 10) || '',
      quantity: stock.quantity || 10
    });
  }

  addStock(stock) {
    const control = this.form.get('stock') as FormArray;
    control.push(this.createStock(stock));
  }

  removeStock({ group, index }: { group: FormGroup; index: number }) {
    const control = this.form.get('stock') as FormArray;
    control.removeAt(index);
  }
}
