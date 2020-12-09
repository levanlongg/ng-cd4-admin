import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardComponent} from './dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule } from '@angular/forms';



const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  }, 
];

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,

    FormsModule,
    ModalModule.forRoot(),
    RouterModule.forChild(routes),
  ]
})
export class DashboardModule { }
