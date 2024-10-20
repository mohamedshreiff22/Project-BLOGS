import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; // تأكد من إضافة هذه السطر


@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent {}
