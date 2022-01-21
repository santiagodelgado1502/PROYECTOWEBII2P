//importamos lo necesario
import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators  } from '@angular/forms';
import { ApiService } from 'src/app/servicios/api/api.service';
import { UserI } from 'src/app/models/user.interface';

//importa las rutas
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //propiedad para ingresar nuevo formulario
  loginForm= new FormGroup({
    nombreusuario: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    
  })

  //contructor que llama al api service y las rutas
  constructor(private api:ApiService, private router:Router) { }

  ngOnInit(): void {
    
  }

  //función que llama a los datos del login y los coloca dentro de otra
  //función para que sean almacenados en el api
  //subscribe:metodo de tipo observable, El consumidor suscrito recibe notificaciones hasta que 
  //se completa la función, o hasta que se da de baja.
  onLogin(form: UserI){
    this.api.registerByEmail(form).subscribe(data =>{
      console.log(data);
    })
  }

  //Función para redigir a otra vista fuera de angular
  onNavigate(){
    window.location.href="http://localhost:3000/Cursos";
  }

}
