import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Book, BookService } from './book.service';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  title1 = 'Demo on HttpClientModule';
  books: any;
  errorMessage?: string;
  add_book?: boolean;
  update_book?: boolean;
  delete_book?: boolean;
  selectedBook?: Book;
  newBook: Book = { 'id': 11, 'name': 'type' };
  constructor(private router: Router, private bookService: BookService) { }
  getBooks() {
    this.bookService.getBooks().subscribe(
      books => this.books = books,
      error => this.errorMessage = <any>error);
  }
  addBook(id: any, name: any) {
    this.bookService.addBook({ 'id': id, 'name': name })
      .subscribe(hero => this.books.push(hero));
  }
  updateBook(id: any, name: any) {
    this.bookService.updateBook({ 'id': id, 'name': name })
      .subscribe(hero => this.books = hero);
  }
  deleteBook(id: number) {
    this.bookService.deleteBook(id)
      .subscribe(hero => this.books = hero);
  }
  ngOnInit() {
    this.getBooks();
  }
}
