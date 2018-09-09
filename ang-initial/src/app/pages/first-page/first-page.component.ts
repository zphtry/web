import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IBook } from '@app/shared/models/book.model';
import { IApp } from '@app/shared/models/app.model';
import { Store } from '@ngrx/store';
import { BookActions } from '@app/shared/actions/book.actions';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss']
})
export class FirstPageComponent implements OnInit {

  book: Observable<IBook>;

  title: string;
  pages: number;

  constructor(private store: Store<IApp>) {
    this.book = store.select('book');
    


  }

  ngOnInit() {
  }

  updateTitle() {
    this.store.dispatch(new BookActions.UpdateTitle(this.title));
  }

  updatePages() {
    this.store.dispatch(new BookActions.UpdatePages(+this.pages));


  }

}
