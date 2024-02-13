import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-adminpanel',
  templateUrl: './adminpanel.component.html',
  styleUrls: ['./adminpanel.component.scss']
})

export class AdminpanelComponent {
  // Model to store form data
  formData: any = {
    productName: '',
    productCode: '',
    regularPrice: '',
    discountPrice: '',
    productImages: [],
    colors: [],
    quantityAvailable: '',
    productCare: '',
    shortDescription: '',
    mainDescription: ''
    };
    showFooter: boolean = false;
  constructor() {}
 

  handleFileInput(event: any, fieldName: string) {
    const files = event.target.files;
    if (files && files.length > 0) {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        if (file.size < 4 * 1024 * 1024) {
        const reader = new FileReader();
        reader.onload = () => {
          this.formData[fieldName].push(reader.result as string); // Convert to string
        };
        reader.readAsDataURL(files[i]);
         }
         else{
          window.alert("reduce image size")
         }
      }
    }
  }
 
  submitFormData(formData:any) {
    console.log(this.formData);
  }
  removeImage(index: number, fieldName: string) {
    this.formData[fieldName].splice(index, 1);
  }
}
