import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { CategoryComponent } from './pages/category/category.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ServicesComponent } from './pages/services/services.component';
import { AboutComponent } from './pages/about/about.component';
import { SaleComponent } from './pages/sale/sale.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ProductComponent } from './admin/product/product.component';
import { LayoutComponent } from './layout/layout.component';
import { LayoutAdminComponent } from './admin/layout-admin/layout-admin.component';
import { HeaderAdminComponent } from './admin/components/header-admin/header-admin.component';
import { FooterAdminComponent } from './admin/components/footer-admin/footer-admin.component';
import { SidebarAdminComponent } from './components/sidebar-admin/sidebar-admin.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { HttpClientModule } from '@angular/common/http';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CategoryComponent,
    NotFoundComponent,
    LoginComponent,
    RegisterComponent,
    ServicesComponent,
    AboutComponent,
    SaleComponent,
    ResetPasswordComponent,
    DashboardComponent,
    ProductComponent,
    LayoutComponent,
    LayoutAdminComponent,
    HeaderAdminComponent,
    FooterAdminComponent,
    SidebarAdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
