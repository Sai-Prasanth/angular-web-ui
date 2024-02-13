// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { BlogsComponent } from './blogs/blogs.component';
import { CollectionsComponent } from './collections/collections.component';
import { FaqComponent } from './faq/faq.component';
import { CommondisplayComponent } from './commondisplay/commondisplay.component';
import { CommonproductdisplayComponent } from './commonproductdisplay/commonproductdisplay.component';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { LoginComponent } from './login/login.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { LogoutComponent } from './logout/logout.component';
import { ExpenseGuard } from './expense.guard';

const routes: Routes = [
 // { path: '', component: NavbarComponent },
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: 'collections', component: CollectionsComponent },
  { path: 'faq', component: FaqComponent },
  {path:'commonDisplay',component:CommondisplayComponent},
  {path:'commonProductDisplay',component:CommonproductdisplayComponent},
  {path:'adminPanel',component:AdminpanelComponent},//,canActivate: [ExpenseGuard]
  {path:'login',component:LoginComponent},
  {path:'forgotpasswordComponent',component:ForgotpasswordComponent},
  {path:'createaccountComponent',component:CreateaccountComponent},
  {path:'logout',component:LogoutComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
