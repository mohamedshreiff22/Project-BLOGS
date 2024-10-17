import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-Blog-details',
  standalone: true,
  imports: [],
  templateUrl: './Blog-details.component.html',
  styleUrl: './Blog-details.component.css'
})
export class BlogDetailsComponent implements OnInit {
  postId: string | null = null;
  constructor(private route: ActivatedRoute) {}



  ngOnInit(): void {
    this.postId = this.route.snapshot.paramMap.get('id');
    console.log('Post ID:', this.postId);
  }
}
