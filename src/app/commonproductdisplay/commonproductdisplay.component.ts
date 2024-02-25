import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
interface Product {
  name: string;
  description: string;
  image: string;
  salePrice: number;
  regularPrice: number;
  code: string;
  color: string[];
  quantity: number;
  additionalImages: string[];
  sareeSpecifications: string[];
  sareeCare: string[];
  occassion: string[];
}


@Component({
  selector: 'app-commonproductdisplay',
  templateUrl: './commonproductdisplay.component.html',
  styleUrls: ['./commonproductdisplay.component.scss']
})
export class CommonproductdisplayComponent implements OnInit {
  @Input() product1: any; // Input property to pass the main product data
  @Input() similarProductss: any ; // Input property to pass an array of similar products
  constructor(private productService:ProductService) { }
  productId: string='';
product:Product={
  name: '',
  description: '',
  image: '',
  salePrice: 0,
  regularPrice: 0,
  code: '',
  color: [],
  quantity: 0,
  additionalImages: [],
  sareeSpecifications: [],
  sareeCare: [],
  occassion: []
}
  // product = {
  //   name: 'Product 1',
  //   description: 'Mangalagiri handloom sarees are crafted from pure cotton with intricate Zari embellishments on the border and a plain body. Ideal for festive occasions, these sarees effortlessly combine tradition and sophistication. They are highly valued by devotees for both ceremonial and devotional wear, as Mangalagiri is home to the revered Lord Narasimha Temple.',
  //   image: 'https://weaversdirect.in/cdn/shop/files/CS_002__silk_set294_shrestha_back__2023-7-18-12-45-14__2730X4096_cab5e750-1059-469c-b03c-38ba050f5394.jpg?v=1689664962',
  //   salePrice: 19.99,
  //   regularPrice:100,
  //   code:'12345678',
  //   color:['https://weaversdirect.in/cdn/shop/files/SILKIKKATHSAREE__silk_set170_tarannum_front2__2023-7-17-14-26-59__2730X4096_cded5307-8e01-4f99-b96f-f400c19ff44a.jpg?v=1689584721&width=493'
  //   ,'https://weaversdirect.in/cdn/shop/files/IMG_20230717_114830.jpg?v=1689664962&width=493',
  //   'https://weaversdirect.in/cdn/shop/files/IMG_20230717_122017.jpg?v=1689664962&width=493'],
  //   quantity:10,
  //   additionalImages:['https://weaversdirect.in/cdn/shop/files/SILKIKKATHSAREE__silk_set170_tarannum_front2__2023-7-17-14-26-59__2730X4096_cded5307-8e01-4f99-b96f-f400c19ff44a.jpg?v=1689584721&width=493'
  //   ,'https://weaversdirect.in/cdn/shop/files/IMG_20230717_114830.jpg?v=1689664962&width=493',
  //   'https://weaversdirect.in/cdn/shop/files/IMG_20230717_122017.jpg?v=1689664962&width=493','https://weaversdirect.in/cdn/shop/files/SILKIKKATHSAREE__silk_set170_tarannum_front2__2023-7-17-14-26-59__2730X4096_cded5307-8e01-4f99-b96f-f400c19ff44a.jpg?v=1689584721&width=493'
  //   ,'https://weaversdirect.in/cdn/shop/files/IMG_20230717_114830.jpg?v=1689664962&width=493',
  //   'https://weaversdirect.in/cdn/shop/files/IMG_20230717_122017.jpg?v=1689664962&width=493'] ,
  //   sareeSpecifications :['Material - Cotton','Length 5.5cm'],
  //   sareeCare : ["Don't Wash","Don't wear"],
  //   occassion:['Daily-Wear','Official']
    
  // };
 similarProducts = [
    {
      name: 'Similar Product 1',
      imageUrl: 'https://cdn.shopify.com/s/files/1/0681/8506/3740/files/SEMISILK4.jpg?v=1686978754',
      price: 24.99,
      productCode :'1234'
      // first 4/5 based on similar name / category / any combination
    },
    {
      name: 'Similar Product 1',
      imageUrl: 'https://cdn.shopify.com/s/files/1/0681/8506/3740/files/SEMISILK4.jpg?v=1686978754',
      price: 24.99,
      productCode :'1234'
      // first 4/5 based on similar name / category / any combination
    },
    {
      name: 'Similar Product 1',
      imageUrl: 'https://cdn.shopify.com/s/files/1/0681/8506/3740/files/Newsaree__ge_set303_bnrs_back1__2023-7-17-16-53-21__2730X4096_2.jpg?v=1689594251',
      price: 24.99,
      // Add more details as needed
    },
    {
      name: 'Similar Product 1',
      imageUrl: 'https://cdn.shopify.com/s/files/1/0681/8506/3740/files/Newsaree__silk_set170_tarannum_back_tassels__2023-7-18-10-49-20__2730X4096_1.jpg?v=1689658919',
      price: 24.99,
      // Add more details as needed
    },  
    {
      name: 'Similar Product 1',
      imageUrl: 'https://cdn.shopify.com/s/files/1/0681/8506/3740/files/SILKIKKATHSAREE__silk_set190_shrestha_sitting__2023-7-17-14-27-56__2730X4096_1.jpg?v=1689584721',
      price: 24.99,
      // Add more details as needed
    }
    // Add more similar products
  ];
  visibleSimilarProducts: any[] = [];
  currentIndex = 0;

  ngOnInit() {
      // const params=this.productService.getRecord();
      // console.log(params)
      // this.product.name = params['name'];
      // this.product.description = params['description'];
      // this.product.image = params['image'];
      // this.product.salePrice = params['salePrice'];
      // this.product.regularPrice = params['regularPrice'];
      // this.product.code = params['code'];
      // this.product.color = params['color'];
      // this.product.quantity = params['quantity'];
      // this.product.additionalImages = params['additionalImages'];
      const params=this.productService.getRecord();
      console.log(params)
      this.product.name = params[0].collection['name'];
      this.product.description = params[0].collection['description'];
      this.product.image = params[0]['image1'];
      this.product.salePrice = params[0]['discounted_price'];
      this.product.regularPrice = params[0]['original_price'];
      this.product.code = params[0]['product_code'];
      this.product.color = ['https://weaversdirect.in/cdn/shop/files/SILKIKKATHSAREE__silk_set170_tarannum_front2__2023-7-17-14-26-59__2730X4096_cded5307-8e01-4f99-b96f-f400c19ff44a.jpg?v=1689584721&width=493'
        ,'https://weaversdirect.in/cdn/shop/files/IMG_20230717_114830.jpg?v=1689664962&width=493',
        'https://weaversdirect.in/cdn/shop/files/IMG_20230717_122017.jpg?v=1689664962&width=493'];
      //this.product.quantity = params['quantity'];
      this.product.additionalImages =[params[0]['image2'],params[0]['image3'],params[0]['image4'],params[0]['image5']];

    this.updateVisibleSimilarProducts();
  }

  transformValue = 'translateX(0)';

  updateVisibleSimilarProducts() {
    this.visibleSimilarProducts = this.similarProducts.slice(this.currentIndex, this.currentIndex + this.similarProducts.length);
    this.transformValue = `translateX(-${this.currentIndex * (100 / this.similarProducts.length)}%)`; // Adjust based on the number of visible items
  }

  // scrollSimilarProducts(direction: 'left' | 'right') {
  //   if (direction === 'right') {
  //     // Move one image left
  //     this.currentIndex++;
  //     if (this.currentIndex + 4 > this.similarProducts.length) {
  //       this.currentIndex = 0;
  //     }
  //   } else {
  //     // Move one image right
  //     this.currentIndex--;
  //     if (this.currentIndex < 0) {
  //       this.currentIndex = this.similarProducts.length - 4;
  //     }
  //   }

  //   this.updateVisibleSimilarProducts();
  // }
  onRecordClick(record: any): void {
    // Handle the click event for the record
    console.log('Clicked Record:', record);}

    
}
