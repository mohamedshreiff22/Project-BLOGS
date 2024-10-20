import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common'; // إضافة هذه السطر
import Swal from 'sweetalert2'; // استيراد SweetAlert2

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    ReactiveFormsModule, CommonModule, // تأكد من استيراد ReactiveFormsModule
  ],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent {
  signUpForm: FormGroup; // تعريف FormGroup

  constructor(private router: Router, private fb: FormBuilder) {
    this.signUpForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
    }, { validators: this.passwordMatchValidator });
  }

  passwordMatchValidator(formGroup: FormGroup) {
    return formGroup.get('password')?.value === formGroup.get('confirmPassword')?.value
      ? null : { mismatch: true };
  }

  goToSignIn() {
    this.router.navigate(['/login']);
  }

  onSubmit() {
    if (this.signUpForm.valid) {
      const email = this.signUpForm.get('email')?.value;

      // تحقق مما إذا كان البريد الإلكتروني موجودًا مسبقًا في localStorage
      if (localStorage.getItem(email)) {
        Swal.fire({
          icon: 'error',
          title: 'خطأ',
          text: 'هذا البريد الإلكتروني مسجل مسبقًا. يرجى تسجيل الدخول.',
        });
        this.router.navigate(['/login']); // الانتقال إلى صفحة تسجيل الدخول
        return; // عدم المتابعة
      }

      // تخزين البيانات في localStorage
      localStorage.setItem(email, JSON.stringify(this.signUpForm.value));
      console.log('Registration successful!');
      Swal.fire({
        icon: 'success',
        title: 'نجاح',
        text: 'تم التسجيل بنجاح!',
      });
      this.router.navigate(['/login']); // انتقل إلى صفحة تسجيل الدخول
    } else {
      Swal.fire({
        icon: 'warning',
        title: 'تحذير',
        text: 'يرجى ملء جميع الحقول المطلوبة بشكل صحيح.',
      });
    }
  }
}
