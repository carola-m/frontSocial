import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { mensajesI, userI } from 'src/app/model/social.models';
import { MensajesService } from 'src/app/services/mensajes.service';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.scss']
})
export class MensajesComponent implements OnInit {
  mensajeForm!: FormGroup;
  submitted: boolean = false;
  errors: any;
  
  mensajeList!:mensajesI[];
  newMensaje!: mensajesI ; 

  userData!: userI;
  emailM:string = "";
  titleM:string = "";
  textomsjM:string = "";

  constructor( private form: FormBuilder, public mensajeApi: MensajesService,  private authApi: ServicesService, private router:Router){}


  ngOnInit(){
    this.mensajeForm = this.form.group({
      title: ["", [Validators.required]],
      textomsj: ["", [Validators.required]],
    })

    // recupero los datos del login
    this.userData = this.authApi.getUser();
    if (this.userData)
      this.emailM = this.userData.email;

    // me suscribo a cambios en el formulario
    this.mensajeForm.valueChanges.subscribe((data) => {
      this.newMensaje = data;
    })

    this.mensajeApi.getMensajeList().subscribe((data:any) => {
      // console.log(data);
      if (data.length > 0)
       {
        this.mensajeList = [...data];
       }  
      else {
         this.mensajeList = [];
      }
    })

  }

  onSubmit()
  {
    // console.log(this.perfilForm.value);
    this.submitted=true;

    //  console.log(this.mensajeForm.valid);
    if (this.mensajeForm.valid){
      // console.log('envio datos');
      let newMsj: mensajesI = {...this.mensajeForm.value, email:this.emailM};

      this.mensajeApi.addMensaje(newMsj).subscribe(
        (data:any) => {
          this.mensajeForm.reset();
          this.recuperarMensajes();
        },
        (error) => {
          this.errors = error;
        }
      )
    }
  }

  borrarMensaje(id:any){
    this.mensajeApi.deleteMensaje(id).subscribe((data) => {
      this.recuperarMensajes();
    })
  }

 recuperarMensajes(){
    this.mensajeApi.getMensajeList().subscribe((data:any) => {
       //  console.log(data);
       if (data.length > 0)
       {
          this.mensajeList = [...data];
       }  
       else
       {
        this.mensajeList = [];
       }
      },
      (error) => {
        this.mensajeList = [];
        this.errors = error;
      }
    );
 }

}
