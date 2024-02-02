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

const routes: Routes = [
 // { path: '', component: NavbarComponent },
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: 'collections', component: CollectionsComponent },
  { path: 'faq', component: FaqComponent },
  {path:'commonDisplay',component:CommondisplayComponent},
  {path:'commonProductDisplay',component:CommonproductdisplayComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
