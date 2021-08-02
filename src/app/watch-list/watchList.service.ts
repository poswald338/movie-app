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

  addMovie(index) {
    let id = this.moviesService.getmovie(index).movie_id

    if (this.watchListMovies.find(o => o.movie_id == id)) {
      return this.watchListMovies;
    } else {
      this.watchListMovies.push(this.moviesService.getmovie(index));
    }
    this.watchListMoviesChanged.next(this.watchListMovies.slice())

    // this.watchListMovies.push(this.moviesService.getmovie(index));
    // this.watchListMoviesChanged.next(this.watchListMovies.slice())
    // console.log(this.watchListMovies);
  }

  addWatchedMovie(index) {
    let id = this.watchListMovies[index].movie_id

    if (this.watchedMovies.find(o => o.movie_id == id)) {
      return this.watchedMovies;
    } else {
      this.watchedMovies.push(this.getMovie(index))
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

  setReview(rating: number) {

  }
}
