import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Movie } from "../movies/movie.model";
import { MoviesService } from "../movies/movies.service";

@Injectable({providedIn: 'root'})
export class WatchListService {
  watchListMoviesChanged = new Subject<Movie[]>()
  constructor(private moviesService: MoviesService) {}

  private watchListMovies: Movie[] = [
    new Movie(
      'Test Movie',
      'This is a test.',
      123,
      'testimagepath'
    )
  ]

  addMovie(id) {
    this.watchListMovies.push(this.moviesService.getmovie(id));
    this.watchListMoviesChanged.next(this.watchListMovies.slice())
    console.log(this.watchListMovies);
  }

  getMovies() {
    return this.watchListMovies.slice()
  }
}
