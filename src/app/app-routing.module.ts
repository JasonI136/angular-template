import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarTopComponent } from 'src/components/navbar-top/navbar-top.component';
import { ContactUsComponent } from './admin/contact-us/contact-us.component';
import { HomeComponent } from './admin/home/home.component';
import { PostComponent } from './admin/post/post.component';
import { UserComponent } from './admin/user/user.component';


const routes: Routes = [
  {path : '', component : HomeComponent},
  {path : 'user', component : UserComponent},
  {path : 'post', component : PostComponent},
  {path : 'contact', component : ContactUsComponent},
  {path : 'navbar', component : NavbarTopComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,]
})
export class AppRoutingModule { }
