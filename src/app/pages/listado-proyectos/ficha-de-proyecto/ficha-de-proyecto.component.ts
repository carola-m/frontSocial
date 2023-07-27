import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { projectsI } from 'src/app/model/social.models';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-ficha-de-proyecto',
  templateUrl: './ficha-de-proyecto.component.html',
  styleUrls: ['./ficha-de-proyecto.component.scss']
})
export class FichaDeProyectoComponent {
  id!: any;
  projectData!: any;

  constructor (private projectApi:ProjectService, private activatedRoute:ActivatedRoute, private router:Router){}

  ngOnInit():void{
    this.activatedRoute.paramMap.subscribe(params=>{
      this.id = params.get("id");
    })

    this.projectApi.getProjectById(this.id).subscribe((data:any) => {
      // console.log(data);
      if (data)
       {
        this.projectData = {...data};
      }  
    })

  }

}
