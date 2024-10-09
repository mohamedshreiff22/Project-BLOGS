import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { BlogsComponent } from './blogs/blogs.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent, title: 'Home' },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginFormComponent, title: 'Login' },
  { path: 'sign-up', component: SignUpComponent, title: 'SignUp' },
  { path: 'blogs', component: BlogsComponent, title: 'Blogs' },
  {
    path: 'user-profile',
    component: UserProfileComponent,
    title: 'User Profile',
  },
  { path: 'contact-us', component: ContactUsComponent, title: 'Contact Us' },
  { path: 'about', component: AboutComponent, title: 'About' },
  { path: '**', component: PageNotFoundComponent },
  { path: 'sign-up/login', redirectTo: '/login', pathMatch: 'full' },
];
