import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Movie } from "../movies/movie.model";
import { MoviesService } from "../movies/movies.service";

@Injectable({providedIn: 'root'})
export class WatchListService {
  watchListMoviesChanged = new Subject<Movie[]>()
  watchedMoviesChanged = new Subject<Movie[]>()
  constructor(private moviesService: MoviesService) {}

  private watchListMovies: Movie[] = []
  private watchedMovies: Movie[] = [];

  addMovie(id) {
    this.watchListMovies.push(this.moviesService.getmovie(id));
    this.watchListMoviesChanged.next(this.watchListMovies.slice())
    console.log(this.watchListMovies);
  }

  addWatchedMovie(index) {
    debugger
    let id =this.watchListMovies[index].movie_id
    let match = this.watchedMovies.find(movie => {
      movie.movie_id === id
    })

    if (match == null || match == undefined) {
      this.watchedMovies.push(this.getMovie(index))
    } else {
      return this.watchedMovies;
    }
    this.watchedMoviesChanged.next(this.watchedMovies.slice())
  }

  getMovies() {
    return this.watchListMovies.slice()
  }

  getMovie(index: number) {
    return this.watchListMovies[index]
  }

  getWatchedMovies() {
    return this.watchedMovies.slice();
  }

  deleteMovie(index: number) {
    this.watchListMovies.splice(index, 1);
    this.watchListMoviesChanged.next(this.watchListMovies.slice())
  }
}
