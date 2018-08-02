import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-stock-inventory',
  styleUrls: ['stock-inventory.component.scss'],
  template: `
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <div formGroupName="store">
        <input type="text" placeholder="Enter branch name" formControlName="branch">
        <input type="text" placeholder="Enter code" formControlName="code">
      </div>

      <button type="submit">Get stock</button>
    </form>

    <pre>{{ form.value | json }}</pre>
  `
})
export class StockInventoryComponent implements OnInit {
  form = new FormGroup({
    store: new FormGroup({
      branch: new FormControl(''),
      code: new FormControl('')
    })
  });

  constructor() {}

  ngOnInit() {}

  onSubmit() {
    console.log('Submitted: ', this.form.value);
  }
}
