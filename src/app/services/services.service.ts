import { Injectable } from '@angular/core';
import { userI } from '../model/social.models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  db_url: string= "http://localhost:5200/user";
  

  public userData: userI ={
    _id: '',
    name: '',
    lastname: '',
    email:'',
    password:'',
    addnews:false,
    role:''
  }
  
  constructor(private http:HttpClient) {}

   register(user:userI){
    // console.log(user);
    if (!user.addnews)
      user.addnews = false;

    return this.http.post(`${this.db_url}/register`, user )
  }

  login(user:userI){
    return this.http.post(`${this.db_url}/login`, user)
  }

  logOut(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('userProfile');
  }

  getToken(){
    return localStorage.getItem('token');
  }

  getNombre(){
    let user = JSON.parse(String(localStorage.getItem('user')));
    // console.log('nombre:', user.name);
    return user?.name;
  }
  getUser(){
    let user = JSON.parse(String(localStorage.getItem('user')));
    // console.log('nombre:', user.name);
    return user;
  }
  
}







