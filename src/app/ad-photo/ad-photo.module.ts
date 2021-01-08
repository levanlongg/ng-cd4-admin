import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdPhotoComponent } from './ad-photo.component'
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';



const routes: Routes = [
  {
    path: '',
    component: AdPhotoComponent,
  }, 
];

@NgModule({
  declarations: [AdPhotoComponent],
  imports: [
    CommonModule,

    FormsModule,
    ModalModule.forRoot(),
    RouterModule.forChild(routes),
  ]
})
export class AdPhotoModule { }
