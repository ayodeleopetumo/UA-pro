import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-stock-branch',
  styleUrls: ['stock-branch.component.scss'],
  template: `
    <div class="stock-branch" [formGroup]="parent">
      <div formGroupName="store">
        <input type="text" placeholder="Enter branch ID" formControlName="branch">
        <input type="text" placeholder="Enter code" formControlName="code">
      </div>
    </div>
  `
})
export class StockBranchComponent implements OnInit {
  @Input() parent: FormGroup;

  constructor() {}

  ngOnInit() {}
}
