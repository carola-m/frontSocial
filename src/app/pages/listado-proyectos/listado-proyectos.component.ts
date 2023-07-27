import { ProjectService } from './../../services/project.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { projectsI } from 'src/app/model/social.models';

@Component({
  selector: 'app-listado-proyectos',
  templateUrl: './listado-proyectos.component.html',
  styleUrls: ['./listado-proyectos.component.scss']
})
export class ListadoProyectosComponent {
  userProjectsList!: projectsI[];
  filtroProjectList!: projectsI[];

  nextPage?:string = "";
  previousPage?:string = "";

  constructor( public projectApi: ProjectService, private router:Router){}

  ngOnInit(){
    this.projectApi.getProjectList('lista').subscribe((data:any) => {
      // console.log(data);
      this.nextPage = data.info.nextPage;
      this.previousPage = data.info.previousPage;

      if (data.results)
       {
        this.userProjectsList = [...data.results];
      }  
    })
  }
}
