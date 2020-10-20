import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AdProductModule } from './ad-product/ad-product.module';
import { Er404Component } from './er404/er404.component';
import { AdProductTypeModule } from './ad-product-type/ad-product-type.module';
import { SharedModule } from './shared/shared.module';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./ad-product/ad-product.module').then(m => m.AdProductModule)  
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  { path: '**', component:Er404Component}
];
@NgModule({
  declarations: [
    AppComponent,
    Er404Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SharedModule,
    AdProductModule,
    AdProductTypeModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
