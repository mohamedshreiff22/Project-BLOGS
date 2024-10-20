import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [ReactiveFormsModule ],
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const email = this.loginForm.get('email')?.value;
      const password = this.loginForm.get('password')?.value;

      // تحقق من البيانات المخزنة في localStorage
      const storedData = localStorage.getItem(email);
      if (storedData) {
        const userData = JSON.parse(storedData);
        if (userData.password === password) {
          this.router.navigate(['/home']); // انتقل إلى الصفحة الرئيسية
        } else {
          alert('Invalid email or password. Please try again.');
        }
      } else {
        alert('Invalid email or password. Please try again.');
      }
    }
  }

}
