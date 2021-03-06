import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdCategoryComponent } from './ad-category.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';



const routes: Routes = [
  {
    path: '',
    component: AdCategoryComponent,
  }, 
];

@NgModule({
  declarations: [AdCategoryComponent],
  imports: [
    CommonModule,

    FormsModule,
    ModalModule.forRoot(),
    RouterModule.forChild(routes),
  ]
})
export class AdCategoryModule { }
