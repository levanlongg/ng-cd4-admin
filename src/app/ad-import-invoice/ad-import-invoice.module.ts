import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdImportInvoiceComponent } from './ad-import-invoice.component'
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';


const routes: Routes = [
  {
    path: '',
    component: AdImportInvoiceComponent,
  }, 
];

@NgModule({
  declarations: [AdImportInvoiceComponent],
  imports: [
    CommonModule,

    FormsModule,
    ModalModule.forRoot(),
    RouterModule.forChild(routes),
  ]
})
export class AdImportInvoiceModule { }
