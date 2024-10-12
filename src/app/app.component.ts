import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FooterComponent } from './footer/footer.component';
import { BlogDetailsComponent } from './Blog-details/Blog-details.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { MoreDestinationsComponent } from './more-destinations/more-destinations.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    NavBarComponent,
    LoginFormComponent,
    SignUpComponent,
    FooterComponent,
    BlogDetailsComponent,
    ContactUsComponent,
    PageNotFoundComponent,
    HomeComponent,
    MoreDestinationsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'TravelerBlog';
}
