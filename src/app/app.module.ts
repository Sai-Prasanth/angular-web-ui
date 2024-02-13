import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CollectionsComponent } from './collections/collections.component';
import { BlogsComponent } from './blogs/blogs.component';
import { FaqComponent } from './faq/faq.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { CommondisplayComponent } from './commondisplay/commondisplay.component';
import { CommonproductdisplayComponent } from './commonproductdisplay/commonproductdisplay.component';
import { ProductService } from './product.service';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { LoginComponent } from './login/login.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { AuthserviceService } from './authservice.service';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { LogoutComponent } from './logout/logout.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NavbarComponent,
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    CollectionsComponent,
    BlogsComponent,
    FaqComponent,
    FooterComponent,
    CommondisplayComponent,
    CommonproductdisplayComponent,
    AdminpanelComponent,
    LoginComponent,
    ForgotpasswordComponent,
    CreateaccountComponent,
    UserprofileComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  providers: [ProductService,AuthserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
