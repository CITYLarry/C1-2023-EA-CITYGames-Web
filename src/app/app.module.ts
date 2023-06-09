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
import { AngularFireModule } from '@angular/fire/compat';
import { GameListComponent } from './components/lists/game-list/game-list.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { GameCardComponent } from './components/cards/game-card/game-card.component'
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxPaginationModule } from 'ngx-pagination';
import { ShopingCartComponent } from './components/shoping-cart/shoping-cart.component';
import { PurchasesPageComponent } from './pages/purchases-page/purchases-page.component';
import { PurchaseListComponent } from './components/lists/purchase-list/purchase-list.component';
import { OrderCardComponent } from './components/cards/order-card/order-card.component';



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
    LoginPageComponent,
    GameListComponent,
    MainPageComponent,
    GameCardComponent,
    ShopingCartComponent,
    PurchasesPageComponent,
    PurchaseListComponent,
    OrderCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlexLayoutModule,
    NgxPaginationModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
