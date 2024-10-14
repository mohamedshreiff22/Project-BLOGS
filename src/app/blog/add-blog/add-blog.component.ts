import { Component } from '@angular/core';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent {
  blog = {
    title: '',
    content: ''
  };

  onSubmit() {
    console.log('Blog Submitted', this.blog);
  }
}
