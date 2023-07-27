import { Injectable } from '@angular/core';
import { userProfileI } from '../model/social.models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {
  db_urlPerfil: string = "https://http://localhost:5200/perfil";

  public userProfileData: userProfileI = {
    _id: '',
    idUser: '',
    name: '',
    lastname: '',
    imagen: '',
    email:'',
    description: '',
    enlaceGit: '',
    enlaceLinkedin: '',
  }

  constructor(private http:HttpClient) { }

  getUserList(Pagina:string) {
    return this.http.get(`${this.db_urlPerfil}/${Pagina}`)
  }
  getUserProfNews() {
    return this.http.get(`${this.db_urlPerfil}/novedad`)
  }

  //id segun la entidad de login
  getUserProfileById(id:string) {
    return this.http.get(`${this.db_urlPerfil}/perfil/${id}`)
  }

  //id segun la entidad de usuarios
  getUserProfileById2(id:string) {
    return this.http.get(`${this.db_urlPerfil}/perfil2/${id}`)
  }
  
  newPerfil(form:FormData){
    //  console.log(user);
     return this.http.post(`${this.db_urlPerfil}`, form )
  }

  deletePerfil (id:string) {
    console.log(`${this.db_urlPerfil}/${id}`)
    return this.http.delete(`${this.db_urlPerfil}/${id}`)
  }

  updatePerfil(id:string, form:FormData){
    //  console.log(form);
    //  console.log(`${this.db_urlPerfil}/${id}`);
     return this.http.put(`${this.db_urlPerfil}/${id}`, form)
  }

 getUserProfile(){
    let user = JSON.parse(String(localStorage.getItem('userProfile')));
    return user;
  }

}
