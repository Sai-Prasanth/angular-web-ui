// common-display.component.ts
import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-common-display',
  templateUrl: './commondisplay.component.html',
  styleUrls: ['./commondisplay.component.scss'],
})
export class CommondisplayComponent {
  constructor(private router: Router,private productService:ProductService) { }
  finalRes={
  dynamicHeading:  'Pattu Sarees',
  dynamicDescription1:"Discover the Beauty of Cotton Sarees",
  dynamicDescription: "The beauty of handloom cotton sarees from Andhra Pradesh, showcasing the traditional allure of Mangalagiri weaves.",
  dynamicValues: [
    { label: 'Price', options: ['Low', 'High'], selectedOption: 'Low' },
    { label: 'Color', options: ['Red', 'Blue', 'Green'], selectedOption: 'Red' },
    { label: 'Occasion', options: ['Casual', 'Formal'], selectedOption: 'Casual' },
    { label: 'Material', options: ['Cotton', 'Silk'], selectedOption: 'Cotton' },
    { label: 'Availability', options: ['In Stock', 'Out of Stock'], selectedOption: 'In Stock' },
  ],
  records :[
    {
      description: 'Description of Product 1',  
      name: 'Purple & grey & handwoven ikkat silk saree', id: '1', price: '20', image: 'https://weaversdirect.in/cdn/shop/files/Newsaree__cotton_set303_bnrs_front2__2023-7-10-9-39-45__3000X4501_f2e0d9aa-3be0-4e37-8022-8f87b6c8c8c8.png?v=1688962805&width=360', hoverImage: 'https://weaversdirect.in/cdn/shop/files/IMG_20230718_124500.jpg?v=1689677991&width=600', material: 'cotton', salePrice: 19.99,
      regularPrice: 100,
      code: '12345678',
      color: ['https://weaversdirect.in/cdn/shop/files/SILKIKKATHSAREE__silk_set170_tarannum_front2__2023-7-17-14-26-59__2730X4096_cded5307-8e01-4f99-b96f-f400c19ff44a.jpg?v=1689584721&width=493'
        , 'https://weaversdirect.in/cdn/shop/files/IMG_20230717_114830.jpg?v=1689664962&width=493',
        'https://weaversdirect.in/cdn/shop/files/IMG_20230717_122017.jpg?v=1689664962&width=493'],
      quantity: 10,
      additionalImages: ['https://weaversdirect.in/cdn/shop/files/SILKIKKATHSAREE__silk_set170_tarannum_front2__2023-7-17-14-26-59__2730X4096_cded5307-8e01-4f99-b96f-f400c19ff44a.jpg?v=1689584721&width=493'
        , 'https://weaversdirect.in/cdn/shop/files/IMG_20230717_114830.jpg?v=1689664962&width=493',
        'https://weaversdirect.in/cdn/shop/files/IMG_20230717_122017.jpg?v=1689664962&width=493', 'https://weaversdirect.in/cdn/shop/files/SILKIKKATHSAREE__silk_set170_tarannum_front2__2023-7-17-14-26-59__2730X4096_cded5307-8e01-4f99-b96f-f400c19ff44a.jpg?v=1689584721&width=493'
        , 'https://weaversdirect.in/cdn/shop/files/IMG_20230717_114830.jpg?v=1689664962&width=493',
        'https://weaversdirect.in/cdn/shop/files/IMG_20230717_122017.jpg?v=1689664962&width=493']
    },
    { name: 'Item 2', id:'2',price: '30', image: 'https://weaversdirect.in/cdn/shop/files/IMG_20230718_125219.jpg?v=1689678576&width=600',hoverImage:'https://weaversdirect.in/cdn/shop/files/Newsaree__cotton_set303_bnrs_front2__2023-7-10-9-39-45__3000X4501_f2e0d9aa-3be0-4e37-8022-8f87b6c8c8c8.png?v=1688962805&width=360' ,color1:'Red',material:'pattu',description: 'Description of Product 1',salePrice: 19.99,
    regularPrice: 100,
    code: '12345678',
    color: ['https://weaversdirect.in/cdn/shop/files/SILKIKKATHSAREE__silk_set170_tarannum_front2__2023-7-17-14-26-59__2730X4096_cded5307-8e01-4f99-b96f-f400c19ff44a.jpg?v=1689584721&width=493'
      , 'https://weaversdirect.in/cdn/shop/files/IMG_20230717_114830.jpg?v=1689664962&width=493',
      'https://weaversdirect.in/cdn/shop/files/IMG_20230717_122017.jpg?v=1689664962&width=493'],
    quantity: 10,
    additionalImages: ['https://weaversdirect.in/cdn/shop/files/SILKIKKATHSAREE__silk_set170_tarannum_front2__2023-7-17-14-26-59__2730X4096_cded5307-8e01-4f99-b96f-f400c19ff44a.jpg?v=1689584721&width=493'
      , 'https://weaversdirect.in/cdn/shop/files/IMG_20230717_114830.jpg?v=1689664962&width=493',
      'https://weaversdirect.in/cdn/shop/files/IMG_20230717_122017.jpg?v=1689664962&width=493', 'https://weaversdirect.in/cdn/shop/files/SILKIKKATHSAREE__silk_set170_tarannum_front2__2023-7-17-14-26-59__2730X4096_cded5307-8e01-4f99-b96f-f400c19ff44a.jpg?v=1689584721&width=493'
      , 'https://weaversdirect.in/cdn/shop/files/IMG_20230717_114830.jpg?v=1689664962&width=493',
      'https://weaversdirect.in/cdn/shop/files/IMG_20230717_122017.jpg?v=1689664962&width=493']},
    { name: 'Item 3', id:'3',price: '25', image: 'https://weaversdirect.in/cdn/shop/files/Newsaree__cotton_set303_bnrs_front2__2023-7-10-9-39-45__3000X4501_f2e0d9aa-3be0-4e37-8022-8f87b6c8c8c8.png?v=1688962805&width=360',hoverImage:'https://weaversdirect.in/cdn/shop/files/60KSILVER3.jpg?v=1689678586&width=600' ,color:'Red',material:'silk'},
    { name: 'Item 4', id:'4',price: '25', image: 'https://weaversdirect.in/cdn/shop/files/Newsaree__cotton_set303_bnrs_front2__2023-7-10-9-39-45__3000X4501_f2e0d9aa-3be0-4e37-8022-8f87b6c8c8c8.png?v=1688962805&width=360',hoverImage:'https://weaversdirect.in/cdn/shop/files/60KSILVER3.jpg?v=1689678586&width=600' ,color:'Red',material:'cotton'},
    
   { name: 'Item 5', id:'5',price: '25', image: 'https://weaversdirect.in/cdn/shop/files/Newsaree__cotton_set303_bnrs_front2__2023-7-10-9-39-45__3000X4501_f2e0d9aa-3be0-4e37-8022-8f87b6c8c8c8.png?v=1688962805&width=360',hoverImage:'https://weaversdirect.in/cdn/shop/files/60KSILVER3.jpg?v=1689678586&width=600' ,color:'Blue',material:'cotton'},
   
   { name: 'item 6', id:'1',price: '20', image: 'https://weaversdirect.in/cdn/shop/files/Newsaree__cotton_set303_bnrs_front2__2023-7-10-9-39-45__3000X4501_f2e0d9aa-3be0-4e37-8022-8f87b6c8c8c8.png?v=1688962805&width=360',hoverImage:'https://weaversdirect.in/cdn/shop/files/IMG_20230718_124500.jpg?v=1689677991&width=600' ,color:'Blue',material:'pattu'},
   { name: 'Item 7', id:'2',price: '30', image: 'https://weaversdirect.in/cdn/shop/files/Newsaree__cotton_set303_bnrs_front2__2023-7-10-9-39-45__3000X4501_f2e0d9aa-3be0-4e37-8022-8f87b6c8c8c8.png?v=1688962805&width=360',hoverImage:'https://weaversdirect.in/cdn/shop/files/IMG_20230718_125219.jpg?v=1689678576&width=600' ,color:'Blue',material:''},
   { name: 'Item 8', id:'3',price: '25', image: 'https://weaversdirect.in/cdn/shop/files/Newsaree__cotton_set303_bnrs_front2__2023-7-10-9-39-45__3000X4501_f2e0d9aa-3be0-4e37-8022-8f87b6c8c8c8.png?v=1688962805&width=360',hoverImage:'https://weaversdirect.in/cdn/shop/files/60KSILVER3.jpg?v=1689678586&width=600' ,color:'Blue',material:'silk'},
   { name: 'Item 9', id:'4',price: '25', image: 'https://weaversdirect.in/cdn/shop/files/Newsaree__cotton_set303_bnrs_front2__2023-7-10-9-39-45__3000X4501_f2e0d9aa-3be0-4e37-8022-8f87b6c8c8c8.png?v=1688962805&width=360',hoverImage:'https://weaversdirect.in/cdn/shop/files/60KSILVER3.jpg?v=1689678586&width=600' ,color:'Blue',material:'cotton'},
   
  { name: 'Item 10', id:'5',price: '25', image: 'https://weaversdirect.in/cdn/shop/files/Newsaree__cotton_set303_bnrs_front2__2023-7-10-9-39-45__3000X4501_f2e0d9aa-3be0-4e37-8022-8f87b6c8c8c8.png?v=1688962805&width=360',hoverImage:'https://weaversdirect.in/cdn/shop/files/60KSILVER3.jpg?v=1689678586&width=600' ,color:'Blue',material:'pattu'},
  
   // Add more records as needed
  ]
}
  selectedProductDetails: any;
  ngOnInit() {
    this.calculateTotalPages();
    this.updateVisibleRecords();
  }

  itemsPerPage = 9; // Number of items per page
  currentPage = 1; // Current page
  totalPages: number=0;
  visibleRecords: any[] = [];
  visibleRecords1: any[] = [];

  calculateTotalPages() {
    this.totalPages = Math.ceil(this.finalRes.records.length / this.itemsPerPage);
  }
  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updateVisibleRecords1();
    }
  }
  formData = {
    priceFrom: '',
    priceTo: '',
    color: '',
    material: '',
    comment: ''
  };
  applyFilters(formValues:any) {
    console.log(formValues ,Object.values(formValues).length)
    this.formData = formValues;
   
    this.visibleRecords1 = this.finalRes.records.filter(record => {
      const price = parseFloat(record.price);
      const isWithinRange = (!this.formData.priceFrom || price >= parseFloat(this.formData.priceFrom)) &&
                           (!this.formData.priceTo || price <= parseFloat(this.formData.priceTo)) &&
                           (!this.formData.color || record.color === this.formData.color) &&
                           (!this.formData.material || record.material === this.formData.material);
      return isWithinRange;
    });
  
     this.visibleRecords=this.visibleRecords1
    this.updateVisibleRecordsFilter(this.visibleRecords1);
  }
  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updateVisibleRecords1();
    }
  }
  onRecordClick(record: any): void {
    console.log('Clicked Record:', record);
    this.productService.setRecord(record);
    this.router.navigate(['/commonProductDisplay', record]);
  }
  updateVisibleRecords1() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.visibleRecords = this.visibleRecords1.slice(startIndex, endIndex);
  }
  updateVisibleRecords() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.visibleRecords = this.finalRes.records.slice(startIndex, endIndex);
    this.visibleRecords1=this.finalRes.records
  }
  updateVisibleRecordsFilter(visibleRecords:any) {
    console.log(this.visibleRecords)
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.visibleRecords = visibleRecords.slice(startIndex, endIndex);
  }
  clearFilter(){
    this.visibleRecords=this.finalRes.records;
    this.formData={
      priceFrom: '',
      priceTo: '',
      color: '',
      material: '',
      comment: ''
    };
    this.updateVisibleRecords();
  }
  
}
