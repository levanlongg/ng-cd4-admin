import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdNewsComponent } from './ad-news.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { NgxPaginationModule } from 'ngx-pagination';
import { PaginationModule } from 'ngx-bootstrap/pagination';


const routes: Routes = [
  {
    path: '',
    component: AdNewsComponent,
  }, 
];

@NgModule({
  declarations: [AdNewsComponent],
  imports: [
    CommonModule,
    CKEditorModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    // PaginationModule,
    ModalModule.forRoot(),
    PaginationModule.forRoot(),
    RouterModule.forChild(routes),
  ]
})
export class AdNewsModule { }
