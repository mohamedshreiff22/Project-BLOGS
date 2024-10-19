import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { BlogDetailsComponent } from './Blog-details/Blog-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { HomeComponent } from './home/home.component';
import { MoreDestinationsComponent } from './more-destinations/more-destinations.component';
import { OneComponent } from './home/tags/one-component/one-component.component';
import { DetailComponent } from './detail/detail.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // إعادة التوجيه إلى الصفحة الرئيسية
  { path: 'home', component: HomeComponent, title: 'Traveler' },
  { path: 'more-destinations', component: MoreDestinationsComponent, title: 'More Destinations' },
  { path: 'login', component: LoginFormComponent, title: 'Login' },
  { path: 'sign-up', component: SignUpComponent, title: 'Sign Up' },
  { path: 'contact-us', component: ContactUsComponent, title: 'Contact Us' },
  { path: 'about', component: AboutComponent, title: 'About' },
  { path: 'destination/:id', component: DetailComponent }, // تفاصيل الوجهة
  { path: 'blog-details/:id', component: BlogDetailsComponent, title: 'Blog Details' }, // تفاصيل المدونة
  { path: 'user-profile/:id', component: UserProfileComponent, title: 'User Profile' }, // ملف المستخدم
  { path: 'user-profile', component: UserProfileComponent, title: 'User Profile' }, // ملف المستخدم بدون ID
  { path: 'one/:tag', component: OneComponent }, // المسار للكارد الواحد
  { path: '**', component: PageNotFoundComponent } // مسار الصفحة غير الموجودة
];
