import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdCaculativePointsComponent } from './ad-caculative-points.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';



const routes: Routes = [
  {
    path: '',
    component: AdCaculativePointsComponent,
  }, 
];

@NgModule({
  declarations: [AdCaculativePointsComponent],
  imports: [
    CommonModule,

    FormsModule,
    ModalModule.forRoot(),
    RouterModule.forChild(routes),
  ]
})
export class AdCaculativePointsModule { }
