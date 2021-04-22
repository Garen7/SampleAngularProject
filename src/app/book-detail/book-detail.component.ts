import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { BookService, Book } from '../book/book.service';
@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit, OnDestroy {
  book?: Book;
  error: any;
  sub: any;
  constructor(private bookService: BookService, private route: ActivatedRoute) { }
  ngOnInit() {
   /* const id = +this.route.snapshot.paramMap.get('id');
  this.bookService.getBook(id)
    .subscribe((book:Book) => this.book = book);*/
    this.sub = this.route.paramMap.pipe(switchMap((params: ParamMap) =>
      this.bookService.getBook(+(params.get('id')||0)))).subscribe(book => this.book = book);
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  goBack() {
    window.history.back();
  }
}