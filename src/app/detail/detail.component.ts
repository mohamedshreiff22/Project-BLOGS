import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  destinationId: string = ''; // تعيين النوع إلى string
  images: { [key: string]: string } = {
    'city-las-vegas': 'assets/gallery-01.jpg',
    'london': 'assets/jakob-owens-Nrf3yY0kxCM-unsplash.jpg',
    'hawaii': 'assets/gallery-03.jpg',
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.destinationId = this.route.snapshot.paramMap.get('id') || ''; // تأكد من استخدام النوع الصحيح
  }

  getImageUrl() {
    return this.images[this.destinationId] || 'assets/default.jpg'; // استخدام الصورة الافتراضية إذا لم يتم العثور على الصورة
  }
  getDescription() {
    const descriptions: { [key: string]: string } = {
      'city-las-vegas': 'This is a vibrant city known for its nightlife and entertainment.',
      'london': 'The capital of England, famous for its history and culture.',
      'hawaii': 'A tropical paradise known for its beautiful beaches and lush landscapes.'
    };
    return descriptions[this.destinationId] || 'Description not available.';
  }
}
