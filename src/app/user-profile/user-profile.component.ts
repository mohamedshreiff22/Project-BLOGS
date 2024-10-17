import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  // استيراد CommonModule

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule]  // إضافة CommonModule هنا
})
export class UserProfileComponent implements OnInit {
  user: any = { name: '', email: '' };
  posts: any[] = [];
  newPostTitle = '';
  newPostContent = '';
  selectedFile: File | null = null;  // To store the selected image file
  successMessage: string = '';
  editMode: boolean = false;
  editingPostId: string | null = null;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      // يمكنك استخدام localStorage هنا فقط إذا كنت في المتصفح
      const storedData = localStorage.getItem('yourKey');
      console.log('Data from localStorage:', storedData);
    } else {
      console.log('Running on the server, localStorage is not available.');
    }
    this.getUserProfile();
    this.getUserPosts();
  }

  // Handle file selection


  addPost(): void {
    if (this.newPostTitle && this.newPostContent) {
        const newPost = {
            id: Date.now(),
            title: this.newPostTitle,
            content: this.newPostContent,
            image: this.selectedFile // هنا تخزن اسم الملف أو المسار أو أي شيء يمثل الصورة
        };

        // حفظ البيانات في LocalStorage
        let posts = JSON.parse(localStorage.getItem('posts') || '[]');

        if (this.editingPostId) {
            // تحديث البوست إذا كان في وضع التعديل
            const postIndex = posts.findIndex((p: any) => p.id === this.editingPostId);
            if (postIndex !== -1) {
                posts[postIndex] = newPost; // استبدال البوست القديم بالبوست المحدث
            }
        } else {
            // إضافة بوست جديد
            posts.push(newPost);
        }

        localStorage.setItem('posts', JSON.stringify(posts));

        // إعادة تعيين الحقول
        this.newPostTitle = '';
        this.newPostContent = '';
        this.selectedFile = null;
        this.editingPostId = null; // الخروج من وضع التعديل

        this.getUserPosts(); // إعادة تحميل البوستات بعد الحفظ
    }
}


  // دالة لتفعيل التعديل عند اختيار الكارد
  editPost(post: any): void {
    this.newPostTitle = post.title;
    this.newPostContent = post.content;
    this.editingPostId = post.id;
    this.selectedFile = post.image;
  }
  cancelEdit(post: any): void {
    post.editMode = false; // إلغاء وضع التعديل بدون حفظ
  }

  savePost(post: any): void {
    post.editMode = false; // حفظ التعديل والخروج من وضع التعديل
    // إذا كنت تريد حفظ التعديلات بشكل دائم، قم بتنفيذ أي عملية حفظ مطلوبة هنا
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
            this.selectedFile = e.target.result; // تخزين الصورة كـ Base64
        };
        reader.readAsDataURL(file); // تحويل الصورة إلى بيانات Base64
    }
}



  getUserProfile(): void {
    const storedUser = localStorage.getItem('user'); // جلب البيانات من LocalStorage
    if (storedUser) {
        this.user = JSON.parse(storedUser); // تحويل النص إلى كائن JavaScript
    } else {
        this.user = { name: '', email: '' }; // إذا لم يكن هناك بيانات في LocalStorage
    }
}

getUserPosts(): void {
  const storedPosts = localStorage.getItem('posts');
  if (storedPosts) {
      this.posts = JSON.parse(storedPosts); // جلب البوستات من LocalStorage
  } else {
      this.posts = []; // إذا لم تكن هناك بوستات
  }
}



deletePost(postId: any): void {
  let posts = JSON.parse(localStorage.getItem('posts') || '[]');
  posts = posts.filter((post: any) => post.id !== postId);
  localStorage.setItem('posts', JSON.stringify(posts));
  this.getUserPosts(); // إعادة تحديث قائمة البوستات بعد الحذف
}

  updateProfile(): void {
    if (this.user) {
        localStorage.setItem('user', JSON.stringify(this.user)); // تحديث البيانات في LocalStorage
        alert('Profile updated successfully');
    }
}

deleteProfile(): void {
  localStorage.removeItem('userProfile');  // حذف بيانات البروفايل
  localStorage.removeItem('posts'); // يمكن أيضًا حذف كل البوستات المرتبطة بالمستخدم
  this.user = { name: '', email: '' };  // إعادة تعيين بيانات المستخدم
  this.posts = [];  // إعادة تعيين البوستات
}


}
