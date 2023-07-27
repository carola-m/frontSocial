import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/services/services.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent{

  constructor( public authApi: ServicesService, private router:Router){}

  logout(){
    this.authApi.logOut();
    this.router.navigate(['/login']);
  }

}
