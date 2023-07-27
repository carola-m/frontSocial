import { Component, OnInit } from '@angular/core';
import { NoticiaService } from 'src/app/services/noticia.service';
import { ProjectService } from './../../services/project.service';
import { PerfilService } from 'src/app/services/perfil.service';
import { projectsI, userProfileI } from 'src/app/model/social.models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  implements OnInit{
  listNoticias: any []= [];
  userProjectsList!: projectsI[];
  userProfileList!: userProfileI[];

  constructor(private _noticiaService:NoticiaService, private projectApi: ProjectService, private perfilApi: PerfilService ) {
  }

  ngOnInit():void {
    this._noticiaService.getNoticias().subscribe(data=>{
       //  console.log(data);
       this.listNoticias= data.articles;
      }, error => {
      // console.log(error);
    })

    this.projectApi.getProjectNews().subscribe((data:any) => {
      // console.log(data);

      if (data)
       {
        this.userProjectsList = [...data];
      }  
    })

    this.perfilApi.getUserProfNews().subscribe((data:any) => {
      // console.log('perfiles', data)
      if (data)
       {
        this.userProfileList = [...data];
      }  
    })

  }

}
