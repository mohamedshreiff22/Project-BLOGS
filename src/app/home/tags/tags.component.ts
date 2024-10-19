import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [],
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent {
  constructor(private router: Router) {}

  goToBlogDetails(tag: string) {
    // توجيه المستخدم إلى صفحة الكومبوننت المناسبة مع المعرف
    this.router.navigate(['/one', tag]);
  }
}
