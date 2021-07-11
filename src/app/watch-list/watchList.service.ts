import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Movie } from "../movies/movie.model";
import { MoviesService } from "../movies/movies.service";

@Injectable({providedIn: 'root'})
export class WatchListService {
  watchListMoviesChanged = new Subject<Movie[]>()
  watchedMoviesChanged = new Subject<Movie[]>()
  constructor(private moviesService: MoviesService) {}

  private watchListMovies: Movie[] = [
    new Movie(
      'Test Movie',
      'This is a test.',
      123,
      'testimagepath',
      false
    )
  ]

  private watchedMovies: Movie[] = [
    new Movie(
      'Test Title',
      'Some content for a test description',
      4,
      'https://media.istockphoto.com/photos/wreck-it-ralph-picture-id476595500?s=612x612',
      true
    )
  ];


  addMovie(id) {
    this.watchListMovies.push(this.moviesService.getmovie(id));
    this.watchListMoviesChanged.next(this.watchListMovies.slice())
    console.log(this.watchListMovies);
  }

  addWatchedMovie(index) {
    this.watchedMovies.push(this.getMovie(index))
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
