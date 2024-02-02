// email.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  sendEmail(formData: any): void {
    // In a real application, call a backend service to send the email.
    console.log('Email sent:', formData);
    // You can integrate this service with a backend that sends the actual email.
  }
}
