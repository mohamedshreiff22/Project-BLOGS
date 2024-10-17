import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() {}

  isLocalStorageAvailable(): boolean {
    try {
      localStorage.setItem('test', 'test');
      localStorage.removeItem('test');
      return true;
    } catch (e) {
      return false;
    }
  }

  getUserProfile(): any {
    if (this.isLocalStorageAvailable()) {
      const userProfile = localStorage.getItem('userProfile');
      return userProfile ? JSON.parse(userProfile) : null;
    }
    return null;
  }

  getUserPosts(): any[] {
    if (this.isLocalStorageAvailable()) {
      const userPosts = localStorage.getItem('userPosts');
      return userPosts ? JSON.parse(userPosts) : [];
    }
    return [];
  }


  addPost(newPost: any, userName: string) {
    let posts = this.getUserPosts();
    const postWithUser = { ...newPost, userName }; // إضافة اسم المستخدم
    posts.push(postWithUser);

    if (this.isLocalStorageAvailable()) {
        localStorage.setItem('userPosts', JSON.stringify(posts));
    }
}

  updateUserProfile(user: any) {
    if (this.isLocalStorageAvailable()) {
      localStorage.setItem('userProfile', JSON.stringify(user));
    }
  }

  deleteUserProfile() {
    if (this.isLocalStorageAvailable()) {
      localStorage.removeItem('userProfile');
    }
  }

  // دالة لحذف المقال بناءً على postId
  deletePost(postId: string) {
    let posts = this.getUserPosts();
    posts = posts.filter((post: { id: string }) => post.id !== postId);
    if (this.isLocalStorageAvailable()) {
      localStorage.setItem('userPosts', JSON.stringify(posts));
      console.log(localStorage.getItem('userPosts')); // تأكد من أن الحذف تم بنجاح
    }
  }
  updatePost(updatedPost: any): void {
    let posts = this.getUserPosts();
    const postIndex = posts.findIndex((post: any) => post.id === updatedPost.id);
    if (postIndex !== -1) {
        posts[postIndex] = updatedPost;
        if (this.isLocalStorageAvailable()) {
            localStorage.setItem('userPosts', JSON.stringify(posts));
        }
    }
}

}
