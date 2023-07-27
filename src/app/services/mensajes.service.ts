import { Injectable } from '@angular/core';
import { mensajesI } from '../model/social.models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MensajesService {
  db_urlMensajes: string = "http://localhost:5200/mensajes";

  public mensajeData: mensajesI = {
    _id: '',
    email:'',
    title:'',
    textomsj: ''
  }

  constructor(private http:HttpClient) { }

  getMensajeList() {
    return this.http.get(`${this.db_urlMensajes}`)
  }
  
  addMensaje(mensaje:mensajesI){
    //  console.log(user);
     return this.http.post(`${this.db_urlMensajes}`, mensaje )
  }

  deleteMensaje (id:string) {
    return this.http.delete(`${this.db_urlMensajes}/${id}`)
  }
}
