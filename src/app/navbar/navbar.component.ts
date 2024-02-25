// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-navbar',
//   templateUrl: './navbar.component.html',
//   styleUrls: ['./navbar.component.scss']
// })
// export class NavbarComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }


// navbar.component.ts
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthserviceService } from '../authservice.service';
import { ProductService} from '../product.service'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isUserLoggedIn = false;
  constructor(private authService: AuthserviceService,private productService:ProductService) {}
  ngOnInit() {
    let storeData = localStorage.getItem("isUserLoggedIn");
    console.log("StoreData: " + storeData);

    if( storeData != null && storeData == "true")
       this.isUserLoggedIn = true;
    else


       this.isUserLoggedIn = false;
 }
  title: string = 'My Angular App';
  links: { path: string; label: string }[] = [
    { path: '/adminPanel', label: 'Admin' },
    { path: '', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
    { path: '/blogs', label: 'Blogs' },
    { path: '/collections', label: 'Collections' },
    { path: '/faq', label: 'Faq' }
  ];
  isDropdownOpen: boolean = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
  async collectionApi(id:number){
    console.log("navbar -",id);
    (await this.productService.getCollectionApi(id)).subscribe((data:any)=>{
      console.log(data);
    })
  }
}
