import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-more-destinations',
  standalone: true,
  imports: [],
  templateUrl: './more-destinations.component.html',
  styleUrl: './more-destinations.component.css'
})
export class MoreDestinationsComponent {
  constructor(private router: Router) {}
  goToBlogDetails(destinationId: string) {
    this.router.navigate(['/blog-details', destinationId]);
}}
