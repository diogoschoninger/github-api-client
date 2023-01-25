import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  form: FormGroup;

  error: any = false;
  loading: any = false;

  results: any = false;

  constructor(
    private formBuilder: FormBuilder,
    private searchService: SearchService,
  ) {
    this.form = this.formBuilder.group({
      query: [null],
    });
  }

  onSubmit() {
    if (!this.form.value.query) return;

    this.results = null;
    this.error = false;
    this.loading = true;

    this.searchService.search(this.form.value.query)
      .subscribe(
        (res: any) => this.onSuccess(res),
        (err: any) => this.onError(),
      )
  }

  onSuccess(res: any) {
    if (res.total_count < 1) {
      this.onError();
    } else {
      this.results = res.items;
    }

    this.loading = false;
  }

  onError() {
    this.results = null;
    this.loading = false;
    this.error = "Não existe nenhum repositório com esse nome."
  }
}