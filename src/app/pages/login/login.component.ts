import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ServicesService } from 'src/app/services/services.service';
import { Router } from '@angular/router';
import { userI } from 'src/app/model/social.models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  loginForm!: FormGroup;
  submitted: boolean = false;
  errors: any;

  constructor( private form: FormBuilder, private authApi: ServicesService, private router:Router){}

  ngOnInit(): void {
    this.loginForm = this.form.group({
      email: ["", [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ["", [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}')]]
    })
  }

  onSubmit(){
    // console.log('entro en la funcion');
    // console.log(this.loginForm.value);
    this.submitted=true;

    if (this.loginForm.valid){
        // console.log('envio el dato');
        let user: userI = this.loginForm.value;
        this.authApi.login(user).subscribe(
         (data:any)=>{
          //  console.log("response ------->", data)
           localStorage.setItem('token', data.token);
           localStorage.setItem('user',JSON.stringify(data.user))

           this.router.navigate(['/']);
         },
           (error) => {
             console.log(error);
             this.errors = error;
         }
       )
    }
  }
}
