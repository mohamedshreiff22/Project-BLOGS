import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2'; // استيراد SweetAlert2

@Component({
  selector: 'app-one',
  standalone: true,
  templateUrl: './one-component.component.html',
  styleUrls: ['./one-component.component.css'],
  imports: [CommonModule]
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

    // عرض رسالة تأكيد
    Swal.fire({
      icon: 'success',
      title: 'Comment Added!',
      text: 'Your comment has been successfully added.',
    });
  }

  editComment(index: number) {
    const commentToEdit = this.comments[index];

    Swal.fire({
      title: 'Edit Comment',
      input: 'textarea',
      inputValue: commentToEdit.text,
      showCancelButton: true,
      confirmButtonText: 'Save',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        if (result.value) {
          commentToEdit.text = result.value; // تحديث نص التعليق
          localStorage.setItem('comments', JSON.stringify(this.comments)); // حفظ التغييرات
          Swal.fire('Updated!', 'Your comment has been updated.', 'success');
        }
      }
    });
  }

  deleteComment(index: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.comments.splice(index, 1); // حذف التعليق
        localStorage.setItem('comments', JSON.stringify(this.comments)); // حفظ التغييرات
        Swal.fire('Deleted!', 'Your comment has been deleted.', 'success');
      }
    });
  }

  getImageUrl() {
    const images = {
      health: 'assets/StockSnap_NKBW9THQYP.jpg',
      food: 'assets/StockSnap_AOUHXQUXDO.jpg',
      breakfast: 'assets/StockSnap_4UP8O6XKXQ.jpg',
      snacks: 'assets/m_Foodie_Girl____MV6Y0SDYXS.jpg',
      lifestyle: 'assets/gallery-05.jpg',
      chocolate: 'assets/m_FRS_Racool_20016.jpg',
    };
    return images[this.tag as keyof typeof images] || 'assets/default.jpg';
  }
}
