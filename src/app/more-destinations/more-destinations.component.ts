import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; // تأكد من إضافة CommonModule

@Component({
  selector: 'app-more-destinations',
  standalone: true,
  templateUrl: './more-destinations.component.html',
  styleUrls: ['./more-destinations.component.css'],
  imports: [CommonModule]
})
export class MoreDestinationsComponent {
  // مصفوفة الكروت
  allCards = [
    { title: 'City, Las Vegas', image: 'assets/place-three.jpg', description: 'Famous for its vibrant nightlife...' },
    { title: 'Queen Elizabeth Tower, London', image: 'assets/jakob-owens-Nrf3yY0kxCM-unsplash.jpg', description: 'Iconic landmark of London...' },
    { title: 'Mountains, Hawaii', image: 'assets/gallery-03.jpg', description: 'Beautiful mountains in Hawaii...' },
    { title: 'City, New York', image: 'assets/gallery-04.jpg', description: 'The city that never sleeps...' },
    { title: 'Eiffel Tower, Paris', image: 'assets/gallery-05.jpg', description: 'The symbol of love and art...' },
    { title: 'Tokyo, Japan', image: 'assets/gallery-06.jpg', description: 'A city of modern technology and rich culture...' },
    { title: 'Sydney Opera House, Australia', image: 'assets/place-two.jpg', description: 'An iconic building in Sydney...' },
    { title: 'The Colosseum, Rome', image: 'assets/place-four.jpg', description: 'A symbol of ancient Rome...' },
    { title: 'Santorini, Greece', image: 'assets/gallery-01.jpg', description: 'Beautiful island in Greece...' },
    { title: 'Great Wall of China', image: 'assets/StockSnap_NKBW9THQYP.jpg', description: 'One of the greatest wonders of the world...' },
    { title: 'Machu Picchu, Peru', image: 'assets/StockSnap_8COSZARW1F.jpg', description: 'Ancient Inca city...' },
    { title: 'Eiffel Tower, Paris', image: 'assets/gallery-05.jpg', description: 'Description for new card 1...' },
    { title: 'New Card 1', image: 'assets/kashish-lamba-8vv87tI238s-unsplash.jpg', description: 'Description for new card 2...' },
    { title: 'New Card 2', image: 'assets/pexels-artur-stec-26039050-25746313.jpg', description: 'Description for new card 3...' },
    { title: 'New Card 3', image: 'assets/pexels-bayfilm9-15377956.jpg', description: 'Description for new card 3...' },
    // يمكنك إضافة المزيد من الكروت حسب الحاجة
  ];

  // عدد الكروت المرئية مبدئياً
  displayedCards = this.allCards.slice(0, 6);
  showAll = false;

  constructor(private router: Router) {}

  // دالة الانتقال لتفاصيل المدونة
  goToBlogCardDetails(card: any) {
    this.router.navigate(['/blog-card-details', card.title], {
      state: { cardDetails: card }
    });
  }

  // دالة عرض المزيد من الكروت أو عرض أقل
// دالة عرض المزيد أو عرض أقل
// عند الضغط على زر عرض المزيد أو عرض أقل
loadMore() {
  if (!this.showAll) {
    // عند الضغط على عرض المزيد
    const nextIndex = this.displayedCards.length;
    this.displayedCards = this.allCards.slice(0, nextIndex + 3);
    if (this.displayedCards.length === this.allCards.length) {
      this.showAll = true;
    }
  } else {
    // عند الضغط على عرض الأقل
    this.showAll = true; // يتم عرض الحركة أولاً
    setTimeout(() => {
      this.displayedCards = this.allCards.slice(0, Math.max(3, this.displayedCards.length - 3));
      if (this.displayedCards.length === 3) {
        this.showAll = false;
      }
    }, 500); // توقيت الحركة يتوافق مع CSS
  }
}
}
