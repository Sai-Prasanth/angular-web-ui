// common-display.component.ts
import { Component } from '@angular/core';
//import { ProductService } from '../product.service';


@Component({
  selector: 'app-common-display',
  templateUrl: './commondisplay.component.html',
  styleUrls: ['./commondisplay.component.scss'],
})
export class CommondisplayComponent {
  dynamicHeading: string = 'Pattu Sarees';
  dynamicDescription1:string="Discover the Beauty of Cotton Sarees"
  dynamicDescription: string ="The beauty of handloom cotton sarees from Andhra Pradesh, showcasing the traditional allure of Mangalagiri weaves.";
  dynamicValues = [
    { label: 'Price', options: ['Low', 'Medium', 'High'], selectedOption: 'Low' },
    { label: 'Color', options: ['Red', 'Blue', 'Green'], selectedOption: 'Red' },
    { label: 'Occasion', options: ['Casual', 'Formal'], selectedOption: 'Casual' },
    { label: 'Material', options: ['Cotton', 'Silk'], selectedOption: 'Cotton' },
    { label: 'Availability', options: ['In Stock', 'Out of Stock'], selectedOption: 'In Stock' },
  ];

  records = [
    { name: 'Purple & grey & handwoven ikkat silk saree', id:'1',price: '$20', image: 'https://weaversdirect.in/cdn/shop/files/Newsaree__cotton_set303_bnrs_front2__2023-7-10-9-39-45__3000X4501_f2e0d9aa-3be0-4e37-8022-8f87b6c8c8c8.png?v=1688962805&width=360',hoverImage:'https://weaversdirect.in/cdn/shop/files/IMG_20230718_124500.jpg?v=1689677991&width=600' },
    { name: 'Item 2', id:'2',price: '$30', image: 'https://weaversdirect.in/cdn/shop/files/Newsaree__cotton_set303_bnrs_front2__2023-7-10-9-39-45__3000X4501_f2e0d9aa-3be0-4e37-8022-8f87b6c8c8c8.png?v=1688962805&width=360',hoverImage:'https://weaversdirect.in/cdn/shop/files/IMG_20230718_125219.jpg?v=1689678576&width=600' },
    { name: 'Item 3', id:'3',price: '$25', image: 'https://weaversdirect.in/cdn/shop/files/Newsaree__cotton_set303_bnrs_front2__2023-7-10-9-39-45__3000X4501_f2e0d9aa-3be0-4e37-8022-8f87b6c8c8c8.png?v=1688962805&width=360',hoverImage:'https://weaversdirect.in/cdn/shop/files/60KSILVER3.jpg?v=1689678586&width=600' },
    { name: 'Item 4', id:'4',price: '$25', image: 'https://weaversdirect.in/cdn/shop/files/Newsaree__cotton_set303_bnrs_front2__2023-7-10-9-39-45__3000X4501_f2e0d9aa-3be0-4e37-8022-8f87b6c8c8c8.png?v=1688962805&width=360',hoverImage:'https://weaversdirect.in/cdn/shop/files/60KSILVER3.jpg?v=1689678586&width=600' },
    
   //{ name: 'Item 5', id:'5',price: '$25', image: 'https://weaversdirect.in/cdn/shop/files/Newsaree__cotton_set303_bnrs_front2__2023-7-10-9-39-45__3000X4501_f2e0d9aa-3be0-4e37-8022-8f87b6c8c8c8.png?v=1688962805&width=360',hoverImage:'https://weaversdirect.in/cdn/shop/files/60KSILVER3.jpg?v=1689678586&width=600' },
    // Add more records as needed
  ];
  selectedProductDetails: any;
  //constructor(private productService: ProductService) {}

  onRecordClick(record: any): void {
    // Handle the click event for the record
    console.log('Clicked Record:', record);
  //   this.productService.getProductDetails(record.id).subscribe({
  //    next: (productDetails: any) => {
  //       // Pass the details to the commonproductdisplay component
  //       this.selectedProductDetails = productDetails;
  //     },
  //    error: (error: any) => {
  //       console.error('Error fetching product details', error);
  //     }
  // });
  }
  
}
