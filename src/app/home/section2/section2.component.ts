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
  ngOnInit() {
    if (typeof localStorage !== 'undefined') {
        const data = localStorage.getItem('yourKey');
        // التعامل مع البيانات
    }
}


  navigateToMoreDestinations() {
    console.log('Navigating to more destinations');
    this.router.navigate(['/more-destinations']);
  }
  goToBlogDetails(destinationId: string) {
    console.log('Navigating to blog details for:', destinationId);
    this.router.navigate(['/blog-details', destinationId]);
  }

}

