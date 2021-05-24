import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { MoviesComponent } from './movies/movies.component';
import { WatchListComponent } from './watch-list/watch-list.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/movies', pathMatch: 'full'},
  {path: 'movies', component: MoviesComponent},
  {path: 'watch-list', component: WatchListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {};
