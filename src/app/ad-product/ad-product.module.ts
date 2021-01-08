import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdProductComponent } from './ad-product.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';



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
    CKEditorModule,
    ReactiveFormsModule,
    FormsModule,
    Ng2SearchPipeModule,
    PaginationModule.forRoot(),
    ModalModule.forRoot(),
    RouterModule.forChild(routes),
  ]
})
export class AdProductModule { }
