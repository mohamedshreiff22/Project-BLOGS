import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { isPlatformBrowser } from '@angular/common';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule]
})
export class UserProfileComponent implements OnInit {
  user: any = { name: 'Admin', email: '' }; // إضافة اسم المستخدم هنا
  posts: any[] = [];
  newPostTitle = '';
  newPostContent = '';
  selectedFile: File | null = null;
  successMessage: string = '';
  editMode: boolean = false;
  editingPostId: string | null = null;
  searchTerm: string = ''; // للبحث
  sortBy: string = 'title'; // فرز حسب العنوان افتراضيًا

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const storedData = localStorage.getItem('posts');
      console.log('Data from localStorage:', storedData);
    } else {
      console.log('Running on the server, localStorage is not available.');
    }
    this.getUserPosts();
  }

  addPost(): void {
    if (this.editingPostId) {
      const postIndex = this.posts.findIndex((post) => post.id === this.editingPostId);
      if (postIndex !== -1) {
        this.posts[postIndex].title = this.newPostTitle;
        this.posts[postIndex].content = this.newPostContent;
        this.posts[postIndex].image = this.selectedFile;

        localStorage.setItem('posts', JSON.stringify(this.posts));
        Swal.fire({
          title: 'تم التعديل بنجاح!',
          text: 'تم تعديل المدونة بنجاح.',
          icon: 'success',
          confirmButtonText: 'موافق'
        });
        this.resetForm();
      }
    } else {
      const newPost = {
        id: this.posts.length + 1,
        title: this.newPostTitle,
        content: this.newPostContent,
        date: new Date(),
        image: this.selectedFile
      };
      this.posts.push(newPost);
      localStorage.setItem('posts', JSON.stringify(this.posts));
      Swal.fire({
        title: 'تمت الإضافة بنجاح!',
        text: 'تم إضافة المدونة الجديدة.',
        icon: 'success',
        confirmButtonText: 'موافق'
      });
      this.resetForm();
    }
  }

  resetForm() {
    this.newPostTitle = '';
    this.newPostContent = '';
    this.selectedFile = null;
    this.editingPostId = null;
  }

  editPost(post: any): void {
    this.newPostTitle = post.title;
    this.newPostContent = post.content;
    this.selectedFile = post.image;
    this.editingPostId = post.id;
  }

  deletePost(postId: number): void {
    Swal.fire({
      title: 'هل أنت متأكد؟',
      text: "لن يمكنك التراجع بعد الحذف!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'نعم، احذف!',
      cancelButtonText: 'إلغاء'
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedPosts = this.posts.filter((post: any) => post.id !== postId);
        localStorage.setItem('posts', JSON.stringify(updatedPosts));
        this.posts = updatedPosts;
        Swal.fire('تم الحذف!', 'تم حذف المدونة بنجاح.', 'success');
      }
    });
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.selectedFile = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  getUserPosts(): void {
    if (typeof window !== 'undefined') {
      const storedPosts = localStorage.getItem('posts');
      if (storedPosts) {
        this.posts = JSON.parse(storedPosts);
      } else {
        this.posts = [];
      }
    } else {
      this.posts = [];
    }
  }

  get filteredAndSortedPosts() {
    let filtered = this.posts;

    if (this.searchTerm) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        post.content.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }

    if (this.sortBy === 'title') {
      filtered.sort((a, b) => a.title.localeCompare(b.title));
    } else if (this.sortBy === 'date') {
      filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    }

    return filtered;
  }
}
