// contact.component.ts
import { Component } from '@angular/core';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  constructor(private emailService: EmailService) {}
  formData = {
    name: '',
    email: '',
    number: '',
    comment: '',
  };

  onSubmit(formData: any): void {
    console.log("cc",this.formData)
    // Call the email service to send the email
    this.emailService.sendEmail(formData);
    // You can add additional logic here if needed.
  }
}
