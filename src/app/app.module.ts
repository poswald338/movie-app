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
import { MovieEditComponent } from './movies/movie-edit/movie-edit.component';

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
    MovieEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
