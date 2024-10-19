import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-section2',
  standalone: true,
  templateUrl: './section2.component.html',
  styleUrls: ['./section2.component.css'] // تأكد من تصحيح "styleUrl" إلى "styleUrls"
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
    this.router.navigate(['/destination', destinationId]);
  }
}
