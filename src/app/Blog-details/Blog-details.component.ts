import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-Blog-details',
  standalone: true,
  imports: [],
  templateUrl: './Blog-details.component.html',
  styleUrl: './Blog-details.component.css'
})
export class BlogDetailsComponent {
  constructor(private route: ActivatedRoute) {}



  ngOnInit() {
    const destinationId = this.route.snapshot.paramMap.get('id');
    console.log('Destination ID:', destinationId);
    window.scrollTo(0, 0);
  }
}
