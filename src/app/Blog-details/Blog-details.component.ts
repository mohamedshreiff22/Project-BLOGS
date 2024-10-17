import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';


@Component({
  selector: 'app-Blog-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './Blog-details.component.html',
  styleUrls: ['./Blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {
  blogTitle: string = '';
  blogContent: string = '';
  blogImage: string = '';
  blogDate: string = '';

  constructor(private route: ActivatedRoute, @Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    const blogId = this.route.snapshot.paramMap.get('id');
    console.log('Blog ID:', blogId);

    const storedPosts = localStorage.getItem('posts');
    if (storedPosts) {
      const posts = JSON.parse(storedPosts);
      const currentPost = posts.find((post: any) => post.id == blogId);

      if (currentPost) {
        this.blogTitle = currentPost.title;
        this.blogContent = currentPost.content;
        this.blogImage = currentPost.image;
        this.blogDate = new Date(currentPost.date).toLocaleDateString();
      } else {
        console.error('Post not found');
      }
    } else {
      console.error('No posts found in localStorage');
    }
}

}

