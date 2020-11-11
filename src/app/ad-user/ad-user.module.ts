import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdUserComponent } from './ad-user.component';
import { RouterModule, Routes } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule } from '@angular/forms';



const routes: Routes = [
  {
    path: '',
    component: AdUserComponent,
  }, 
];

@NgModule({
  declarations: [AdUserComponent],
  imports: [
    CommonModule,

    FormsModule,
    ModalModule.forRoot(),
    RouterModule.forChild(routes),
  ]
})
export class AdUserModule { }
