import { Component, OnInit } from '@angular/core';
import { PerfilService } from 'src/app/services/perfil.service';
import { ActivatedRoute, Router } from '@angular/router';
import { userProfileI } from 'src/app/model/social.models';

@Component({
  selector: 'app-detalle-usuario',
  templateUrl: './detalle-usuario.component.html',
  styleUrls: ['./detalle-usuario.component.scss']
})
export class DetalleUsuarioComponent implements OnInit {
  id!: any;
  userProfileData!: userProfileI;

  constructor (private perfilApi:PerfilService, private activatedRoute:ActivatedRoute, private router:Router){}

  ngOnInit():void{
    this.activatedRoute.paramMap.subscribe(params=>{
      this.id = params.get("id");
    })

    this.perfilApi.getUserProfileById2(this.id).subscribe((data:any) => {
      // console.log(data);
      if (data)
       {
        this.userProfileData = {...data};
      }  
    })

  }

}
