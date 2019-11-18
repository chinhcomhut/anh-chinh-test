import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BooksComponent } from './components/books/books.component';
import { BookListComponent } from './components/books/book-list/book-list.component';
import { BookAddComponent } from './components/books/book-add/book-add.component';
import { BookEditComponent } from './components/books/book-edit/book-edit.component';
import { BooksService} from './services/books.service';
import {FormsModule} from "@angular/forms";
import { ViewbookComponent } from './viewbook/viewbook.component';

const appRoutes: Routes = [
  {
    path : '',
    component : HomeComponent
  },
  {
    path : 'books',
    component : BooksComponent,
    children : [
      {
        path : '',
        component : BookListComponent
      },
      {
        path : ':id/edit',
        component : BookEditComponent
      },
      {
        path : 'add',
        component : BookAddComponent
      }
    ]
  }
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BooksComponent,
    BookListComponent,
    BookAddComponent,
    BookEditComponent,
    ViewbookComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [
    BooksService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
