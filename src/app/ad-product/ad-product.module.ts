import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdProductComponent } from './ad-product.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';



const routes: Routes = [
  {
    path: '',
    component: AdProductComponent,
  }, 
];

@NgModule({
  declarations: [AdProductComponent],
  imports: [
    CommonModule,

    FormsModule,
    ModalModule.forRoot(),
    RouterModule.forChild(routes),
  ]
})
export class AdProductModule { }
