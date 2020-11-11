import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdNewsComponent } from './ad-news.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';



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

    FormsModule,
    ModalModule.forRoot(),
    RouterModule.forChild(routes),
  ]
})
export class AdNewsModule { }
