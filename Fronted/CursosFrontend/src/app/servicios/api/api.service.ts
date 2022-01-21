import { Injectable } from '@angular/core';
import { UserI } from 'src/app/models/user.interface';

//HttpClient:Protocolo
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

//Se coloca la ruta del api
export class ApiService {
  url:string="/api/v1/usuarios"
  

  constructor(private http:HttpClient) {}

  //función para guardar los datos del registro en el api
  //Observable es Es un objeto que define métodos de devolución de llamada para manejar 
  //los tres tipos de notificaciones que un observable puede enviar
  registerByEmail(form:UserI):Observable<any>{
    let direccion = this.url;
    return this.http.post<any>(direccion, form)
    

  }
  
  
}
