import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdProducerComponent } from './ad-producer.component'
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import {ToastModule} from 'primeng/toast';


const routes: Routes = [
  {
    path: '',
    component: AdProducerComponent,
  }, 
];

@NgModule({
  declarations: [AdProducerComponent],
  imports: [
    CommonModule,
    ToastModule,
    FormsModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    RouterModule.forChild(routes),
  ]
})
export class AdProducerModule { }
