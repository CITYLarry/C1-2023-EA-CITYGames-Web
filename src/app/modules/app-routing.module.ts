import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { ErrorPageComponent } from '../pages/error-page/error-page.component';
import { RegisterPageComponent } from '../pages/register-page/register-page.component';
import { LoginPageComponent } from '../pages/login-page/login-page.component';
import { MainPageComponent } from '../pages/main-page/main-page.component';
import { PurchasesPageComponent } from '../pages/purchases-page/purchases-page.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: MainPageComponent,
  },
  {
    path: 'register',
    component: RegisterPageComponent,
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'purchases',
    component: PurchasesPageComponent,
    ...canActivate(() => redirectUnauthorizedTo(['/login'])),
  },
  {
    path: '**',
    component: ErrorPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
