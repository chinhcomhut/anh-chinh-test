import { Component, OnInit, OnDestroy } from '@angular/core';
import { BooksModels} from '../../../models/books.models';
import { BooksService} from '../../../services/books.service';
import { Subscription} from 'rxjs';
import { Router} from '@angular/router';


@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.scss']
})
export class BookAddComponent implements OnInit, OnDestroy {
  public subscription: Subscription;
  public booksmodels: BooksModels;

  constructor(
    public booksService: BooksService,
    public routerService: Router ) { }

  ngOnInit() {
    this.booksmodels = new BooksModels();
  }
  onAddBooks() {
    this.subscription = this.booksService.addBooks(this.booksmodels).subscribe(data => {
      if (data && data.id) {
  this.routerService.navigate(['booksmodels']);
      }
    });
  }
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
