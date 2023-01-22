import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  params: {
    q?: string;
    type?: string;
    o?: string;
    s?: string;
  } = {};

  constructor(private route: ActivatedRoute) {
    route.queryParams.subscribe(params => this.params = params);
  }
}
