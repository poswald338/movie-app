import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MovieDetailComponent } from './movies/movie-detail/movie-detail.component';
import { MovieEditComponent } from './movies/movie-edit/movie-edit.component';
import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { MovieComponent } from './movies/movie-list/movie/movie.component';
import { MovieNewComponent } from './movies/movie-new/movie-new.component';
import { MoviesComponent } from './movies/movies.component';
import { WatchListComponent } from './watch-list/watch-list.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/movies', pathMatch: 'full' },
  {
    path: 'movies', component: MoviesComponent,
    children: [
      { path: 'new', component: MovieNewComponent },
      { path: ':id', component: MovieDetailComponent },
      { path: ':id/edit', component: MovieEditComponent }
    ]
  },
  { path: 'watch-list', component: WatchListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { };
