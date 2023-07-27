import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { userI } from 'src/app/model/social.models';
import { ServicesService } from 'src/app/services/services.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})

export class RegisterComponent {

  registerForm!: FormGroup;
  submitted: boolean= false;
  errors: any;

  constructor(private form: FormBuilder, private authApi: ServicesService, private router: Router ){}

  ngOnInit(): void {
    this.registerForm = this.form.group({
      name: ["", [Validators.required]],
      lastname: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ["", [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}')]],
      addnews: [""]
    })
  }

  onSubmit(){
    // console.log(this.registerForm.value);
    this.submitted=true;

    console.log(this.registerForm.valid);
    if (this.registerForm.valid){
      let user: userI = this.registerForm.value;
      this.authApi.register(user).subscribe(
        (data:any) => {
          // console.log(data)
          this.router.navigate(['/login']);
        },
        (error) => {
          this.errors = error;
        }
      )
    }
  }
}
