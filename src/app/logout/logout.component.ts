import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from '../authservice.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {


  constructor(private authService : AuthserviceService, private router: Router) { }

  ngOnInit() {
     this.authService.logout();
     this.router.navigate(['/login']);
  }

}
