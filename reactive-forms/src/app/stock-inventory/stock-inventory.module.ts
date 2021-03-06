import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { StockInventoryComponent } from './containers/stock-inventory/stock-inventory.component';
import { StockProductsComponent } from './components/stock-products/stock-products.component';
import { StockSelectorComponent } from './components/stock-selector/stock-selector.component';
import { StockBranchComponent } from './components/stock-branch/stock-branch.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  exports: [StockInventoryComponent],
  declarations: [
    StockInventoryComponent,
    StockProductsComponent,
    StockSelectorComponent,
    StockBranchComponent
  ],
  providers: []
})
export class StockInventoryModule {}
