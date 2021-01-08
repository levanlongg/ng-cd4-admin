import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AdProductModule } from './ad-product/ad-product.module';
import { Er404Component } from './er404/er404.component';
import { AdProductTypeModule } from './ad-product-type/ad-product-type.module';
//import { SharedModule } from './shared/shared.module';
import { AdImportInvoiceModule } from './ad-import-invoice/ad-import-invoice.module';
import { AdProducerModule } from './ad-producer/ad-producer.module';
import { AdUserModule } from './ad-user/ad-user.module';
import { AdPhotoModule } from './ad-photo/ad-photo.module';
import { AdNewsModule } from './ad-news/ad-news.module';
import { AdNewsTypeModule } from './ad-news-type/ad-news-type.module';
import { AdCategoryModule } from './ad-category/ad-category.module';
import { AdBillSaleModule } from './ad-bill-sale/ad-bill-sale.module';
import { AdCaculativePointsModule } from './ad-caculative-points/ad-caculative-points.module';
import { AdRevenueStatisticsModule } from './ad-revenue-statistics/ad-revenue-statistics.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { LoginModule } from './login/login.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { UploadComponent } from './upload/upload.component';
import { MenuHeaderComponent } from './menu-header/menu-header.component';
import { ToastModule } from 'primeng/toast';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { AccordionModule} from 'primeng/accordion';
import { JwtModule } from "@auth0/angular-jwt";
import { AuthGuard } from './guards/auth-guards.service';
import { environment } from 'src/environments/environment';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


//import { MatSliderModule } from '@angular/material/slider';
export function tokenGetter() {
  return localStorage.getItem("jwt");
}

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)  
  },
  {
    path: 'ad-product',
    //canActivate: [AuthGuard],
    loadChildren: () => import('./ad-product/ad-product.module').then(m => m.AdProductModule)  
  },
  {
    path: 'ad-product-type',
    //canActivate: [AuthGuard],
    loadChildren: () => import('./ad-product-type/ad-product-type.module').then(m => m.AdProductTypeModule)  
  },
  {
    path: 'ad-producer',
    //canActivate: [AuthGuard],
    loadChildren: () => import('./ad-producer/ad-producer.module').then(m => m.AdProducerModule)  
  },
  {
    path: 'ad-import-invoice',
    //canActivate: [AuthGuard],
    loadChildren: () => import('./ad-import-invoice/ad-import-invoice.module').then(m => m.AdImportInvoiceModule)  
  },
  {
    path: 'ad-user',
    //canActivate: [AuthGuard],
    loadChildren: () => import('./ad-user/ad-user.module').then(m => m.AdUserModule)  
  },
  {
    path: 'ad-photo',
    //canActivate: [AuthGuard],
    loadChildren: () => import('./ad-photo/ad-photo.module').then(m => m.AdPhotoModule)  
  },
  {
    path: 'ad-news',
    //canActivate: [AuthGuard],
    loadChildren: () => import('./ad-news/ad-news.module').then(m => m.AdNewsModule)  
  },
  {
    path: 'ad-news-type',
    //canActivate: [AuthGuard],
    loadChildren: () => import('./ad-news-type/ad-news-type.module').then(m => m.AdNewsTypeModule)  
  },
  {
    path: 'ad-category',
    //canActivate: [AuthGuard],
    loadChildren: () => import('./ad-category/ad-category.module').then(m => m.AdCategoryModule)  
  },
  {
    path: 'ad-bill-sale',
    //canActivate: [AuthGuard],
    loadChildren: () => import('./ad-bill-sale/ad-bill-sale.module').then(m => m.AdBillSaleModule)  
  },
  {
    path: 'ad-caculative-points',
    //canActivate: [AuthGuard],
    loadChildren: () => import('./ad-caculative-points/ad-caculative-points.module').then(m => m.AdCaculativePointsModule)  
  },
  {
    path: 'ad-revenue-statistics',
    //canActivate: [AuthGuard],
    loadChildren: () => import('./ad-revenue-statistics/ad-revenue-statistics.module').then(m => m.AdRevenueStatisticsModule)  
  },
  {
    path: 'dashboard',
    //canActivate: [AuthGuard],
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)  
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  { path: '**', component:Er404Component}
];
@NgModule({
  declarations: [
    AppComponent,
    Er404Component,
    UploadComponent,
    MenuHeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Ng2SearchPipeModule,
    //SharedModule,
    AdUserModule,
    AdPhotoModule,
    AdProductModule,
    AdProducerModule,
    AdNewsModule,
    AdCaculativePointsModule,
    AdRevenueStatisticsModule,
    AdCategoryModule,
    LoginModule,
    AdBillSaleModule,
    AdNewsTypeModule,
    AdProductTypeModule,
    AdImportInvoiceModule,
    DashboardModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ToastModule,
    CKEditorModule,
    CommonModule,
    AccordionModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ["localhost:44338"],
        blacklistedRoutes: []
      }
    })
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
