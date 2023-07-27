import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { projectsI, userI } from 'src/app/model/social.models';
import { ProjectService } from 'src/app/services/project.service';
import { PerfilService } from 'src/app/services/perfil.service';


@Component({
  selector: 'app-subida-proyectos',
  templateUrl: './subida-proyectos.component.html',
  styleUrls: ['./subida-proyectos.component.scss']
})
export class SubidaProyectosComponent implements OnInit {
  projectForm!: FormGroup;
  submitted: boolean = false;
  errors: any;
  projectData!: projectsI;

  nameP:string = "";
  imagenP:string = "";
  htmlP:string = "";
  cssP:string = "";
  reactP:string = "";
  angularP:string = "";
  phpP:string = "";
  jscriptP:string = "";
  pythonP:string = "";
  javaP:string = "";
  otrosP:string = "";
  otherTextP:string = "";
  descriptionP:string = "";
  enlaceGitP:string = "";
  enlaceProyectoP:string = "";

  userData!: userI;
  idProfileF: string = "";
  
  uploadFile!:File;
  fileName:string = "";

  projectId!:string;

  constructor( private form: FormBuilder, public projectApi: ProjectService, private perfilApi: PerfilService,private router:Router){}

  ngOnInit(){
    this.projectForm = this.form.group({
      name: ["", [Validators.required]],
      imagen: ["" ],
      html: ["" ],
      css: ["" ],
      react: ["" ],
      angular: ["" ],
      php: ["" ],
      jscript: ["" ],
      python: ["" ],
      java: ["" ],
      otros: ["" ],
      otherText: ["" ],
      description: ["" ],
      enlaceGit: ["" ],
      enlaceProyecto: ["" ]
    })
    // recupero los datos del login
    this.userData = this.perfilApi.getUserProfile();
    this.idProfileF = this.userData._id;

    // recupero los datos del login
    this.projectId = this.projectApi.getProjectId();

    this.projectApi.getProjectById(this.projectId).subscribe(
      (data:any) => {
        // console.log(data);
        if (data)
        {
          this.nameP = data.name;
          this.imagenP = data.imagen;
          this.htmlP = data.html;
          this.cssP = data.css;
          this.reactP = data.react;
          this.angularP = data.angular;
          this.phpP = data.php;
          this.jscriptP = data.jscript;
          this.pythonP = data.python;
          this.javaP = data.java;
          this.otrosP = data.otros;
          this.otherTextP = data.otherText;
          this.descriptionP = data.description;
          this.enlaceGitP = data.enlaceGit;
          this.enlaceProyectoP = data.enlaceProyecto;
        }          
      }
    ) 

    // me suscribo a cambios en el formulario
    this.projectForm.valueChanges.subscribe((data) => {
       this.projectData = data;
    } )  
  }

  onFileSelected(event:any) {
    this.uploadFile = event.target.files[0];
    this.fileName = this.uploadFile.name;
  }

  addProject(){
    // console.log(this.perfilForm.value);
    this.submitted=true;

    // console.log(this.perfilForm.valid);
    if (this.projectForm.valid){
      // console.log('envio datos');
      // let project: projectsI = {...this.projectForm.value, idUser:this.idProfileF};
      const formData = new FormData();

      formData.append('idUser', this.idProfileF);
      formData.append('name', this.nameP);

      if (this.fileName)
         formData.append("imagen", this.uploadFile, this.fileName);

      formData.append('html', this.htmlP);
      formData.append('css', this.cssP);
      formData.append('react', this.reactP);
      formData.append('angular', this.angularP);
      formData.append('php', this.phpP);
      formData.append('jscript', this.jscriptP);
      formData.append('python', this.pythonP);
      formData.append('java', this.javaP);
      formData.append('otros', this.otrosP);
      formData.append('otherText', this.otherTextP);
      formData.append('description', this.descriptionP);
      formData.append('enlaceGit', this.enlaceGitP);
      formData.append('enlaceProyecto', this.enlaceProyectoP);      

      this.projectApi.addProject(formData).subscribe(
        (data:any) => {
          // console.log(data)
          this.router.navigate(['/areaPersonal']);
        },
        (error) => {
          this.errors = error;
        }
      )
    }
  }

  updateProject(){
    const formData = new FormData();

    formData.append('idUser', this.idProfileF);
    formData.append('name', this.nameP);

    if (this.fileName)
       formData.append("imagen", this.uploadFile, this.fileName);

    formData.append('html', this.htmlP);
    formData.append('css', this.cssP);
    formData.append('react', this.reactP);
    formData.append('angular', this.angularP);
    formData.append('php', this.phpP);
    formData.append('jscript', this.jscriptP);
    formData.append('python', this.pythonP);
    formData.append('java', this.javaP);
    formData.append('otros', this.otrosP);
    formData.append('otherText', this.otherTextP);
    formData.append('description', this.descriptionP);
    formData.append('enlaceGit', this.enlaceGitP);
    formData.append('enlaceProyecto', this.enlaceProyectoP);      

    this.projectApi.updateProject(this.projectId, formData).subscribe((data) => {
      this.router.navigate(['/areaPersonal']);
    })
  }

  removeProject(){
    this.projectApi.deleteProject(this.projectId).subscribe((data) => {
      this.router.navigate(['/areaPersonal']);

    })
  }
}
