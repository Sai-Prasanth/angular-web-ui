import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../product.service';


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

  product = {
    name: 'Product 1',
    description: 'Description of Product 1',
    image: 'https://weaversdirect.in/cdn/shop/files/CS_002__silk_set294_shrestha_back__2023-7-18-12-45-14__2730X4096_cab5e750-1059-469c-b03c-38ba050f5394.jpg?v=1689664962',
    salePrice: 19.99,
    regularPrice:100,
    code:'12345678',
    color:['https://weaversdirect.in/cdn/shop/files/SILKIKKATHSAREE__silk_set170_tarannum_front2__2023-7-17-14-26-59__2730X4096_cded5307-8e01-4f99-b96f-f400c19ff44a.jpg?v=1689584721&width=493'
    ,'https://weaversdirect.in/cdn/shop/files/IMG_20230717_114830.jpg?v=1689664962&width=493',
    'https://weaversdirect.in/cdn/shop/files/IMG_20230717_122017.jpg?v=1689664962&width=493'],
    quantity:10,
    additionalImages:['https://weaversdirect.in/cdn/shop/files/SILKIKKATHSAREE__silk_set170_tarannum_front2__2023-7-17-14-26-59__2730X4096_cded5307-8e01-4f99-b96f-f400c19ff44a.jpg?v=1689584721&width=493'
    ,'https://weaversdirect.in/cdn/shop/files/IMG_20230717_114830.jpg?v=1689664962&width=493',
    'https://weaversdirect.in/cdn/shop/files/IMG_20230717_122017.jpg?v=1689664962&width=493','https://weaversdirect.in/cdn/shop/files/SILKIKKATHSAREE__silk_set170_tarannum_front2__2023-7-17-14-26-59__2730X4096_cded5307-8e01-4f99-b96f-f400c19ff44a.jpg?v=1689584721&width=493'
    ,'https://weaversdirect.in/cdn/shop/files/IMG_20230717_114830.jpg?v=1689664962&width=493',
    'https://weaversdirect.in/cdn/shop/files/IMG_20230717_122017.jpg?v=1689664962&width=493']
    // Add more details as needed
  };
 similarProducts = [
    {
      name: 'Similar Product 1',
      imageUrl: 'https://cdn.shopify.com/s/files/1/0681/8506/3740/files/SEMISILK4.jpg?v=1686978754',
      price: 24.99,
      // Add more details as needed
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
    },  
    {
      name: 'Similar Product 1',
      imageUrl: 'https://weaversdirect.in/cdn/shop/files/Newsaree__ge_set303_bnrs_back1__2023-7-17-16-53-21__2730X4096_2.jpg?v=1689594251',
      price: 24.99,
      // Add more details as needed
    },  
    {
      name: 'Similar Product 1',
      imageUrl: 'https://weaversdirect.in/cdn/shop/files/CS_002__silk_set294_shrestha_back__2023-7-18-12-45-14__2730X4096_cab5e750-1059-469c-b03c-38ba050f5394.jpg?v=1689664962',
      price: 24.99,
      // Add more details as needed
    },  

    // Add more similar products
  ];
  visibleSimilarProducts: any[] = [];
  currentIndex = 0;

  ngOnInit() {
      const params=this.productService.getRecord();
console.log(params)
      this.product.name = params['name'];
      this.product.description = params['description'];
      this.product.image = params['image'];
      this.product.salePrice = params['salePrice'];
      this.product.regularPrice = params['regularPrice'];
      this.product.code = params['code'];
      this.product.color = params['color'];
      this.product.quantity = params['quantity'];
      this.product.additionalImages = params['additionalImages'];

    this.updateVisibleSimilarProducts();
  }

  transformValue = 'translateX(0)';

  updateVisibleSimilarProducts() {
    this.visibleSimilarProducts = this.similarProducts.slice(this.currentIndex, this.currentIndex + 4);
    this.transformValue = `translateX(-${this.currentIndex * (100 / 4)}%)`; // Adjust based on the number of visible items
  }

  scrollSimilarProducts(direction: 'left' | 'right') {
    if (direction === 'right') {
      // Move one image left
      this.currentIndex++;
      if (this.currentIndex + 4 > this.similarProducts.length) {
        this.currentIndex = 0;
      }
    } else {
      // Move one image right
      this.currentIndex--;
      if (this.currentIndex < 0) {
        this.currentIndex = this.similarProducts.length - 4;
      }
    }

    this.updateVisibleSimilarProducts();
  }
  onRecordClick(record: any): void {
    // Handle the click event for the record
    console.log('Clicked Record:', record);}
}
