import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdProducerComponent } from './ad-producer.component'
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';



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

    FormsModule,
    ModalModule.forRoot(),
    RouterModule.forChild(routes),
  ]
})
export class AdProducerModule { }
