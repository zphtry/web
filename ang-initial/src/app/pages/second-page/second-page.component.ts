import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IApp } from '@app/shared/models/app.model';
import { IBook } from '@app/shared/models/book.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.scss']
})
export class SecondPageComponent implements OnInit {

  // book: IBook;
  book: Observable<IBook>;


  constructor(private store: Store<IApp>) { }

  ngOnInit() {
    this.book = this.store.select('book');

    // this.store.select('book').subscribe(val => 
    //   this.book = val)
    // this.book = this.store.select('book');

    // this.book.subscribe(val => console.log(val))

    // console.log(this.store.take(1));

    // setInterval(async () => {
    //   console.log(await this.book.toPromise());
    // }, 3000);
  }

}
