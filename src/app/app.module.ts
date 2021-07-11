import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MoviesComponent } from './movies/movies.component';
import { WatchListComponent } from './watch-list/watch-list.component';
import { MovieComponent } from './movies/movie-list/movie/movie.component';
import { MovieDetailComponent } from './movies/movie-detail/movie-detail.component';
import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { AppRoutingModule } from './app-routing.module';
import { MovieNewComponent } from './movies/movie-new/movie-new.component';
import { FormsModule } from '@angular/forms';
import { MovieStartComponent } from './movies/movie-start/movie-start.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShortenPipe } from './shared/shorten.pipe';
import { WatchListMovieComponent } from './watch-list/watch-list-movie/watch-list-movie.component';
import { ReviewComponent } from './shared/review/review.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WatchAgainComponent } from './watch-again/watch-again.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MoviesComponent,
    WatchListComponent,
    MovieComponent,
    MovieDetailComponent,
    MovieListComponent,
    MovieNewComponent,
    MovieStartComponent,
    DropdownDirective,
    ShortenPipe,
    WatchListMovieComponent,
    ReviewComponent,
    WatchAgainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
