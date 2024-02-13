import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from '../authservice.service';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email='';
  password='';
  constructor(private router:Router,private authService:AuthserviceService) { }

  ngOnInit(): void {
 
  }
  onLoginSubmit() {
    const dbMail='admin@gmail.com';
    console.log("Login page: " + this.email);
    console.log("Login page: " + this.password);
    // this.authService.login(this.email, this.password)
    //      .subscribe( data => { 
    //         console.log("Is Login Success: " + data); 
      
    //        if(data) this.router.navigate(['']); 
    //   });
    if( dbMail==='admin@gmail.com'){
      if( this.email==='admin@gmail.com' && this.password==='admin')
      {
      this.router.navigate(['']);
      }
      else{
        window.alert('incorrect password')
      }
    }
    else{
      window.alert("Incorrect Mail");
    }
  }
}
