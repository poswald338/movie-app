import { Movie } from "./movie.model";
import { Injectable } from '@angular/core';
import { Subject } from "rxjs";
import { WatchListService } from "../watch-list/watchList.service";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  constructor(){}
  moviesChanged = new Subject<Movie[]>()

  private movies: Movie[] = [
    new Movie(
      'Lord of the Rings',
      'Can Frodo and Sam destroy the ring?',
      228,
      'https://cdn.pixabay.com/photo/2018/08/16/19/56/wedding-rings-3611277_1280.jpg'
    ),
    new Movie(
      'Dodgeball',
    'A sport you never knew you loved to watch.',
    122,
    'https://media.istockphoto.com/photos/dodgeballs-ready-for-pe-class-picture-id897819430'
    ),
    new Movie(
      'Wreck It Ralph',
      'Ralph is not such a bad guy',
      94,
      'https://media.istockphoto.com/photos/wreck-it-ralph-picture-id476595500?s=612x612'
    )
  ];

  getmovie(index: number) {
    return this.movies[index];
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
