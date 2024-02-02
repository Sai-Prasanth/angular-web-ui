import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  

  private apiUrl = 'your_api_endpoint';
  constructor(private http: HttpClient) {}

  getProductDetails(productId: string): Observable<any> {
    let apiUrl = 'your_api_endpoint';
    // Modify the URL according to your API
    const url = `${apiUrl}/products/${productId}`;
   // return this.http.get(url);  
   const respone= [ { name: 'Item 1', description:'wertgfcdrf',id:'1',price: '$20', image: 'https://weaversdirect.in/cdn/shop/files/Newsaree__cotton_set303_bnrs_front2__2023-7-10-9-39-45__3000X4501_f2e0d9aa-3be0-4e37-8022-8f87b6c8c8c8.png?v=1688962805&width=360',hoverImage:'https://weaversdirect.in/cdn/shop/files/IMG_20230718_124500.jpg?v=1689677991&width=600' }];
   return of(respone);
  }
  

}
