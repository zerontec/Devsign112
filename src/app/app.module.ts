import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { ContactComponent } from './pages/contact/contact.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { NoFoundPagesComponent } from './pages/no-found-pages/no-found-pages.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { FooterComponent } from './pages/footer/footer.component';
import { FreeComponent } from './pages/free/free.component';
import { InformationComponent } from './pages/information/information.component';
import {UneteComponent} from './pages/unete/unete.component';
import { SliderComponent } from './pages/slider/slider.component';
import { environment } from '../environments/environment';

//servicios
import {DataPaginaService} from './services/data-pagina.service';

//modulo
import {HttpClientModule} from '@angular/common/http';
import {AngularFireModule} from '@angular/fire';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicesComponent,
    ContactComponent,
    RegisterComponent,
    LoginComponent,
    NoFoundPagesComponent,
    NavbarComponent,
    FooterComponent,
    FreeComponent,
    InformationComponent,
    SliderComponent,
    UneteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [ DataPaginaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
