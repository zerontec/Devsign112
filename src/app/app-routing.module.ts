import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { InformationComponent } from './pages/information/information.component';
import { ServicesComponent } from './pages/services/services.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { FreeComponent } from './pages/free/free.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NoFoundPagesComponent } from './pages/no-found-pages/no-found-pages.component';
import {UneteComponent } from './pages/unete/unete.component';

const routes: Routes =[

{path: '', component: HomeComponent },
{path: 'informacion', component: InformationComponent},
{path: 'servicios', component: ServicesComponent},
{path: ' login', component: LoginComponent},
{path: 'register', component: RegisterComponent},
{path: 'free', component: FreeComponent},
{path: 'contacto', component: ContactComponent},
{path: 'unete', component: UneteComponent}
{path: '**', component: NoFoundPagesComponent}
];
@NgModule({
    imports: [
      CommonModule, RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
    declarations: []
  })
  export class AppRoutingModule {}