//Se exporta lo necesario
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CursosComponent} from './vistas/cursos/cursos.component'
import { RegistroComponent } from './vistas/registro/registro.component';
import { LoginComponent } from './vistas/login/login.component';

//Que sea la pagina principal
const routes: Routes = [
  {path:'', redirectTo:'cursos', pathMatch:'full'},
  //crear la ruta
  {path:'cursos', component:CursosComponent},
  {path: 'login', component:LoginComponent},
  {path: 'registro', component:RegistroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//exportar los componentes
export const routingComponents =[RegistroComponent, CursosComponent, LoginComponent]
