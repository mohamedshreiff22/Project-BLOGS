import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-registered-emails',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './registered-emails.component.html',
  styleUrls: ['./registered-emails.component.css'],
})
export class RegisteredEmailsComponent {
  getRegisteredEmails() {
    return JSON.parse(localStorage.getItem('registeredEmails') || '[]');
  }
}
