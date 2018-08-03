import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Product } from '../../models/products.interface';

@Component({
  selector: 'app-stock-selector',
  styleUrls: ['stock-selector.component.scss'],
  template: `
    <section class="stock-selector" [formGroup]="parent">
      <div formGroupName="selector">
        <select formControlName="product_id">
          <option value="">Select stock</option>
          <option
            *ngFor="let product of products"
            [value]="product.id">{{ product.name }}</option>
        </select>
        <input class="stock-counter" type="number" step="10" min="10" max="1000" formControlName="quantity">
        <button type="button" (click)="onAdd()">Add stock</button>
      </div>
    </section>
  `
})
export class StockSelectorComponent implements OnInit {
  @Input() parent: FormGroup;
  @Input() products: Product[];
  @Output() added = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}

  onAdd() {
    this.added.emit(this.parent.get('selector').value);
  }
}
