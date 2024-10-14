import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EditorModule } from '@tinymce/tinymce-angular';  // تأكد من استيراد TinyMCE

import { AddBlogComponent } from './add-blog/add-blog.component';  // تأكد من مسار المكون

@NgModule({
  declarations: [
    AddBlogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    EditorModule  // إضافة TinyMCE هنا
  ],
})
export class BlogModule { }
