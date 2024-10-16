import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule], // Add CommonModule here
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  teamMembers = [
    {
      name: 'Dr. Eng. Abdulrahman Essam EL-Agry',
      title: 'Project Manager',
      photo: 'assets/abdo.png',
      bio: 'Civil Engineering Consultant, HSE certified, Committee Member of MLD Governorate',
    },
    {
      name: 'Dr. Eng. Abdulrahman Essam EL-Agry',
      title: 'Project Manager',
      photo: 'assets/abdo.png',
      bio: 'Civil Engineering Consultant, HSE certified, Committee Member of MLD Governorate',
    },
    {
      name: 'Dr. Eng. Abdulrahman Essam EL-Agry',
      title: 'Project Manager',
      photo: 'assets/abdo.png',
      bio: 'Civil Engineering Consultant, HSE certified, Committee Member of MLD Governorate',
    },
    {
      name: 'Dr. Eng. Abdulrahman Essam EL-Agry',
      title: 'Project Manager',
      photo: 'assets/abdo.png',
      bio: 'Civil Engineering Consultant, HSE certified, Committee Member of MLD Governorate',
    },
    {
      name: 'Dr. Eng. Abdulrahman Essam EL-Agry',
      title: 'Project Manager',
      photo: 'assets/abdo.png',
      bio: 'Civil Engineering Consultant, HSE certified, Committee Member of MLD Governorate',
    },
    {
      name: 'Dr. Eng. Abdulrahman Essam EL-Agry',
      title: 'Project Manager',
      photo: 'assets/abdo.png',
      bio: 'Civil Engineering Consultant, HSE certified, Committee Member of MLD Governorate',
    },
    // Add more team members as needed
  ];

  selectedMember: any = null;

  openBio(member: any) {
    this.selectedMember = member;
    document.body.classList.add('modal-open');
  }

  closeBio() {
    this.selectedMember = null;
    document.body.classList.remove('modal-open');
  }
}