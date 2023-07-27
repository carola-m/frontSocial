import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { projectsI } from '../model/social.models';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  db_urlProject: string = "http://localhost:5200/project";
  updateProjectId:string = "";

  constructor(private http:HttpClient) { }

  getProjectList(Pagina:string) {
    return this.http.get(`${this.db_urlProject}/${Pagina}`)
  }
  
  getProjectNews() {
    return this.http.get(`${this.db_urlProject}/novedad`)
  }

  getProjectById(id:string) {
    return this.http.get(`${this.db_urlProject}/project/${id}`)
  }

  getProjectByUser(id:string) {
    return this.http.get(`${this.db_urlProject}/user/${id}`)
  }

  addProject(form:FormData){
     return this.http.post(`${this.db_urlProject}`, form )
  }

  deleteProject (id:string) {
    return this.http.delete(`${this.db_urlProject}/${id}`)
  }

  updateProject(id:string, form:FormData){
     return this.http.put(`${this.db_urlProject}/${id}`, form)
  }

  setUpdateProject(id:any){
    this.updateProjectId = id;
  }

  getProjectId(){
    return this.updateProjectId;
  }
}
