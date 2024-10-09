import { Component } from '@angular/core';
import { Section1Component } from './section1/section1.component';
import { Section2Component } from './section2/section2.component';
import { TagsComponent } from './tags/tags.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Section1Component, Section2Component, TagsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
