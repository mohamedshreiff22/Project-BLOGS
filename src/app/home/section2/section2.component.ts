import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-section2',
  standalone: true,
  imports: [Section2Component],
  templateUrl: './section2.component.html',
  styleUrl: './section2.component.css'
})
export class Section2Component {

  constructor(private router: Router) {}

  navigateToMoreDestinations() {
    console.log('Navigating to more destinations');
    this.router.navigate(['/more-destinations']);
  }
}

