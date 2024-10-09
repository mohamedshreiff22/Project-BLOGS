import {
  Component,
  OnInit,
  OnDestroy,
  Renderer2,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
})
export class LoginFormComponent implements OnInit, OnDestroy {
  constructor(
    private router: Router,
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object // Inject PLATFORM_ID to check if it's browser
  ) {}

  goToSignup() {
    this.router.navigate(['/sign-up']);
  }

  ngOnInit() {
    // Check if the platform is a browser before accessing the document
    if (isPlatformBrowser(this.platformId)) {
      this.renderer.addClass(document.body, 'custom-background');
    }
  }

  ngOnDestroy() {
    // Check if the platform is a browser before accessing the document
    if (isPlatformBrowser(this.platformId)) {
      this.renderer.removeClass(document.body, 'custom-background');
    }
  }
}
