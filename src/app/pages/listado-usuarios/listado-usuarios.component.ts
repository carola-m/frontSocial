import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { userProfileI } from 'src/app/model/social.models';
import { PerfilService } from 'src/app/services/perfil.service';

@Component({
  selector: 'app-listado-usuarios',
  templateUrl: './listado-usuarios.component.html',
  styleUrls: ['./listado-usuarios.component.scss']
})

export class ListadoUsuariosComponent implements OnInit{
  userProfileList!: userProfileI[];
  filtroUserList!: userProfileI[];

  nextPage?:string = "";
  previousPage?:string = "";

  constructor( public perfilApi: PerfilService, private router:Router){}

  ngOnInit(){
    this.perfilApi.getUserList('Lista').subscribe((data:any) => {
      this.nextPage = data.info.nextPage;
      this.previousPage = data.info.previousPage;
      // console.log(data);

      if (data.results)
       {
        this.userProfileList = [...data.results];
      }  
    })
  }


}
