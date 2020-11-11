import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdBillSaleComponent } from './ad-bill-sale.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';


const routes: Routes = [
  {
    path: '',
    component: AdBillSaleComponent,
  }, 
];

@NgModule({
  declarations: [AdBillSaleComponent],
  imports: [
    CommonModule,

    FormsModule,
    ModalModule.forRoot(),
    RouterModule.forChild(routes),
  ]
})
export class AdBillSaleModule { }
