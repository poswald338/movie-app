import { Movie } from "./movie.model";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private movies: Movie[] = [
    new Movie(
      'Lord of the Rings',
      'Can Frodo and Sam destry the all powerful ring?',
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
    return this.movies;
  }
};
