import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vg-detail',
  templateUrl: './vg-detail.component.html',
  styleUrls: ['./vg-detail.component.css'],
})
export class VgDetailComponent {
  id: number;
  title: string;
  company: string;
  image: string;
  rate: number;
  userName: string;

  constructor(route: ActivatedRoute) {
    this.id = route.snapshot.params['id'];
    this.image = route.snapshot.queryParams['img'];
    this.title = route.snapshot.queryParams['title'];
    this.company = route.snapshot.queryParams['company'];
    this.rate = route.snapshot.queryParams['rate'];
    this.userName = route.snapshot.queryParams['userName'];
  }
}
