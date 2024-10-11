import {
  Component,
  OnInit,
  OnDestroy,
  Renderer2,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css',
})
export class ContactUsComponent implements OnInit, OnDestroy {
  constructor(
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object // Inject PLATFORM_ID to check if it's browser
  ) {}

  ngOnInit() {
    // Check if the platform is a browser before accessing the document
    if (isPlatformBrowser(this.platformId)) {
      this.renderer.addClass(document.body, 'contact-background');
    }
  }

  ngOnDestroy() {
    // Check if the platform is a browser before accessing the document
    if (isPlatformBrowser(this.platformId)) {
      this.renderer.removeClass(document.body, 'contact-background');
    }
  }
}
