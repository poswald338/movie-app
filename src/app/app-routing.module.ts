import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MovieDetailComponent } from './movies/movie-detail/movie-detail.component';
import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { MovieComponent } from './movies/movie-list/movie/movie.component';
import { MovieNewComponent } from './movies/movie-new/movie-new.component';
import { MoviesComponent } from './movies/movies.component';
import { WatchAgainComponent } from './watch-again/watch-again.component';
import { WatchListComponent } from './watch-list/watch-list.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  {
    path: 'movies', component: MoviesComponent,
    children: [
      { path: 'new', component: MovieNewComponent },
      { path: ':id', component: MovieDetailComponent }
    ]
  },
  { path: 'watch-list', component: WatchListComponent },
  { path: 'watch-again', component: WatchAgainComponent},
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { };
