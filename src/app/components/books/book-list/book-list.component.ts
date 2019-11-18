import { Component, OnInit, OnDestroy } from '@angular/core';
import { BooksService} from '../../../services/books.service';
import { Subscription} from 'rxjs';
import { BooksModels} from '../../../models/books.models';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit, OnDestroy {
public subscription: Subscription;
public booksmodels: BooksModels[] = [];
  constructor(public booksService: BooksService) { }

  ngOnInit() {
    this.subscription =  this.booksService.getAllBooks().subscribe(data => {
     this.booksmodels = data;
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
