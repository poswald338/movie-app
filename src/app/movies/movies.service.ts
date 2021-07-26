import { Movie } from "./movie.model";
import { Injectable } from '@angular/core';
import { Subject } from "rxjs";
import { WatchListService } from "../watch-list/watchList.service";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient){}
  moviesChanged = new Subject<Movie[]>()
  watchedMoviesChanged = new Subject<Movie[]>()

  private movies: Movie[] = [];

  getmovie(id) {
    return this.movies[id];
  }

  getPopularMovies() {
    return this.http.get('https://api.themoviedb.org/3/movie/popular?api_key=170aa506ce3c8bccc926c0cdf08ef95a&language=en-US&page=(1,3)'
    ).subscribe((data: { results: any }) => {
      let output;
      if (data) {
        output = data.results;
        this.movies = output.map((x: { [x: string]: any }) => new Movie(x));
      } else {
        this.movies = [];
      }
      console.log(this.movies)
    })
  }

  getmovies() {
    return this.movies.slice();
  }

  addMovie(newMovie: Movie) {
    this.movies.push(newMovie);
    this.moviesChanged.next(this.movies.slice())
  }

  deleteMovie(id: number) {
    this.movies.splice(id,1);
    this.moviesChanged.next(this.movies.slice());
  }

  addWatchList(id: number) {
  }
};
