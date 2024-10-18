import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Comment {
  name: string;
  text: string;
  time: string;
  likes: number;       // عدد الإعجابات
  dislikes: number;    // عدد عدم الإعجابات
}

@Component({
  selector: 'app-Blog-details',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './Blog-details.component.html',
  styleUrls: ['./Blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {
  blogTitle: string = '';
  blogContent: string = '';
  blogImage: string = '';
  blogDate: string = '';
  newCommentName: string = '';
  newComment: string = '';
  comments: Comment[] = [];
  isEditing: boolean[] = [];  // مصفوفة لتتبع حالة التعديل لكل تعليق

  constructor(private route: ActivatedRoute, @Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    const blogId = this.route.snapshot.paramMap.get('id');
    console.log('Blog ID:', blogId);

    if (blogId) {
      const storedComments = localStorage.getItem(`comments_${blogId}`);
      if (storedComments) {
        this.comments = JSON.parse(storedComments);
        this.isEditing = new Array(this.comments.length).fill(false);  // إعداد مصفوفة التعديل
      }

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
    } else {
      console.error('No Blog ID found in URL');
    }
  }

  addComment(): void {
    if (this.newComment.trim() && this.newCommentName.trim()) {
      const newComment: Comment = {
        name: this.newCommentName,
        text: this.newComment,
        time: new Date().toLocaleString(),
        likes: 0,        // تعيين الإعجابات إلى 0
        dislikes: 0      // تعيين عدم الإعجابات إلى 0
      };

      this.comments.push(newComment);
      this.isEditing.push(false);  // إضافة حالة جديدة للتعديل
      this.newComment = '';
      this.newCommentName = '';

      const blogId = this.route.snapshot.paramMap.get('id');
      if (blogId) {
        localStorage.setItem(`comments_${blogId}`, JSON.stringify(this.comments));
      }
    }
  }

  // بدء التعديل
  editComment(index: number): void {
    this.isEditing[index] = true;
  }

  // إلغاء التعديل
  cancelEdit(index: number): void {
    this.isEditing[index] = false;
  }

  // حفظ التعديل
  saveEdit(index: number): void {
    this.isEditing[index] = false;

    const blogId = this.route.snapshot.paramMap.get('id');
    if (blogId) {
      localStorage.setItem(`comments_${blogId}`, JSON.stringify(this.comments));
    }
  }

  // حذف تعليق
  deleteComment(index: number): void {
    this.comments.splice(index, 1);
    this.isEditing.splice(index, 1);  // حذف الحالة الخاصة بالتعديل

    const blogId = this.route.snapshot.paramMap.get('id');
    if (blogId) {
      localStorage.setItem(`comments_${blogId}`, JSON.stringify(this.comments));
    }
  }

  // دالة trackBy لضمان الاحتفاظ بالتركيز أثناء التعديل
  trackByFn(index: number, item: any): number {
    return index;  // استخدم الفهرس كمعرف لكل عنصر
  }

  // دوال الإعجاب وعدم الإعجاب
  likeComment(index: number): void {
    this.comments[index].likes += 1;
    this.saveToLocalStorage();
  }

  dislikeComment(index: number): void {
    this.comments[index].dislikes += 1;
    this.saveToLocalStorage();
  }

  // حفظ التعليقات المحدثة في LocalStorage
  saveToLocalStorage(): void {
    const blogId = this.route.snapshot.paramMap.get('id');
    if (blogId) {
      localStorage.setItem(`comments_${blogId}`, JSON.stringify(this.comments));
    }
  }
  isArabic(text: string): boolean {
    const arabicRegex = /[\u0600-\u06FF]/;
    return arabicRegex.test(text);
  }
}
