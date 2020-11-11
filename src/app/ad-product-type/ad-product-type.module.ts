import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdProductTypeComponent } from './ad-product-type.component'
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';



const routes: Routes = [
  {
    path: '',
    component: AdProductTypeComponent,
  }, 
];

@NgModule({
  declarations: [AdProductTypeComponent],
  imports: [
    CommonModule,

    FormsModule,
    ModalModule.forRoot(),
    RouterModule.forChild(routes),
  ]
})
export class AdProductTypeModule { }
