import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; // تأكد من وجود CommonModule هنا
declare var bootstrap: any;

@Component({
  selector: 'app-section2',
  standalone: true,
  templateUrl: './section2.component.html',
  styleUrls: ['./section2.component.css'],
  imports: [CommonModule] // تأكد من وجوده هنا
})
export class Section2Component {
  modalTitle: string = '';
  modalImage: string = '';
  modalDescription: string = '';
  facebookShareUrl: string = '';  // تعريف خاصية مشاركة الفيسبوك
  twitterShareUrl: string = '';  // تعريف خاصية مشاركة التويتر

  // تعريف cardsData
  cardsData = [
    {
      title: 'City, Las Vegas',
      image: 'assets/gallery-01.jpg',
      description: 'NOMADasaurus offers an excellent travel photography blog with inspiring stories, guides, and tips. They document their travels with stunning photography, making it a great source of articles you can reference for your blog. You can check out their articles on different destinations and even gain tips on photography to improve your visuals.'
    },
    {
      title: 'Queen Elizabeth Tower, London',
      image: 'assets/pexels-negativespace-34617.jpg',
      description: 'Find out which clock tower in the north of England inspired its design, and what all the different symbols found on the tower mean.'},
    {
      title: 'Mountains, Hawaii',
      image: 'assets/pexels-mikhail-nilov-6965509.jpg',
      description: 'Beautiful mountains in Hawaii.'
    }
  ];

  constructor(private router: Router) {}

  navigateToMoreDestinations() {
    this.router.navigate(['/more-destinations']);
  }

  openModal(title: string, imageUrl: string, description: string) {
    this.modalTitle = title;
    this.modalImage = imageUrl;
    this.modalDescription = description;

    // إعداد روابط المشاركة للفيسبوك والتويتر
    this.facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&t=${encodeURIComponent(title)}`;
    this.twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(title)}`;

    const modalElement = document.getElementById('blogModal');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
  }
}
