import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common'; // إضافة هذا السطر

@Component({
  selector: 'app-one',
  standalone: true,
  templateUrl: './one-component.component.html',
  styleUrls: ['./one-component.component.css'],
  imports: [CommonModule] // إضافة هذا السطر
})
export class OneComponent implements OnInit {
  tag: string = '';
  comments: any[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.tag = this.route.snapshot.paramMap.get('tag') || '';
    this.loadComments();
  }

  loadComments() {
    const storedComments = localStorage.getItem('comments');
    if (storedComments) {
      this.comments = JSON.parse(storedComments);
    }
  }

  submitComment(author: string, text: string) {
    const newComment = {
      author: author,
      text: text,
      date: new Date().toLocaleDateString(),
    };

    this.comments.push(newComment);
    localStorage.setItem('comments', JSON.stringify(this.comments));
  }

  getImageUrl() {
    const images = {
      health: 'assets/place-one.jpg',
      food: 'assets/gallery-02.jpg',
      breakfast: 'assets/gallery-03.jpg',
      snacks: 'assets/gallery-04.jpg',
      lifestyle: 'assets/gallery-05.jpg',
      chocolate: 'assets/gallery-06.jpg',
    };
    return images[this.tag as keyof typeof images] || 'assets/default.jpg';
  }
}
