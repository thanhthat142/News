import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [],
  templateUrl: './detail.html',
  styleUrls: ['./detail.scss']
})
export class DetailComponent {
  id = '';

  constructor(private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id') || '';
   }
}
