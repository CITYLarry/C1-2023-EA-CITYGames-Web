import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './modules/app-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { ErrorComponent } from './components/error/error.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { RegisterComponent } from './components/forms/register/register.component';
import { LoginComponent } from './components/forms/login/login.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ErrorPageComponent,
    ErrorComponent,
    RegisterPageComponent,
    RegisterComponent,
    LoginComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
