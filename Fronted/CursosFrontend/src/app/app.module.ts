import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';


//importar lo necesario
import { ReactiveFormsModule, FormsModule  } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './vistas/login/login.component'
import { RegistroComponent } from './vistas/registro/registro.component';
import { CursosComponent } from './vistas/cursos/cursos.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    LoginComponent,
    RegistroComponent,
    CursosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, 
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
