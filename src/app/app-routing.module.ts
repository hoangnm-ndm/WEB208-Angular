import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { CategoryComponent } from './pages/category/category.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { RegisterComponent } from './pages/register/register.component';
import { SaleComponent } from './pages/sale/sale.component';
import { ServicesComponent } from './pages/services/services.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'sale', component: SaleComponent },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
