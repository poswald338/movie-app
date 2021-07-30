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
  private pageNumber: number = 1
  moviesChanged = new Subject<Movie[]>()
  watchedMoviesChanged = new Subject<Movie[]>()

  private movies: Movie[] = [];

  getmovie(index) {
    return this.movies[index];
  }

  getmovies() {
    return this.movies.slice();
  }

  getPopularMovies() {
    return this.http.get('https://api.themoviedb.org/3/movie/popular?api_key=170aa506ce3c8bccc926c0cdf08ef95a&language=en-US&page=' + String(this.pageNumber)
    ).subscribe((data: { results: any }) => {
      let output;
      if (data) {
        output = data.results;
        this.movies = output.map((x: { [x: string]: any }) => new Movie(x));
      } else {
        this.movies = [];
      }
    })
  }

  //retireves the next page of movies
  getNextPop() {
    this.pageNumber = this.pageNumber + 1;
    return this.http.get('https://api.themoviedb.org/3/movie/popular?api_key=170aa506ce3c8bccc926c0cdf08ef95a&language=en-US&page=' + String(this.pageNumber)
    ).subscribe((data: { results: any }) => {
      let output;
      if (data) {
        output = data.results;
        this.movies = output.map((x: { [x: string]: any }) => new Movie(x));
      } else {
        this.movies = [];
      }
    })
  }

  //retireves the previous page of movies
  getPrevPop() {
    this.pageNumber = this.pageNumber - 1;
    return this.http.get('https://api.themoviedb.org/3/movie/popular?api_key=170aa506ce3c8bccc926c0cdf08ef95a&language=en-US&page=' + String(this.pageNumber)
    ).subscribe((data: { results: any }) => {
      let output;
      if (data) {
        output = data.results;
        this.movies = output.map((x: { [x: string]: any }) => new Movie(x));
      } else {
        this.movies = [];
      }
    })
  }

  getTheatre() {
    this.pageNumber = 1
    return this.http.get('https://api.themoviedb.org/3/movie/now_playing?api_key=170aa506ce3c8bccc926c0cdf08ef95a&language=en-US&page=' + String(this.pageNumber)
    ).subscribe((data: { results: any }) => {
      let output;
      if (data) {
        output = data.results;
        this.movies = output.map((x: { [x: string]: any }) => new Movie(x));
      } else {
        this.movies = [];
      }
    })
  }

  //retireves the next page of movies
  getNextTheatre() {
    this.pageNumber = this.pageNumber + 1;
    return this.http.get('https://api.themoviedb.org/3/movie/now_playing?api_key=170aa506ce3c8bccc926c0cdf08ef95a&language=en-US&page=' + String(this.pageNumber)
    ).subscribe((data: { results: any }) => {
      let output;
      if (data) {
        output = data.results;
        this.movies = output.map((x: { [x: string]: any }) => new Movie(x));
      } else {
        this.movies = [];
      }
    })
  }

  //retireves the previous page of movies
  getPrevTheatre() {
    this.pageNumber = this.pageNumber - 1;
    return this.http.get('https://api.themoviedb.org/3/movie/now_playing?api_key=170aa506ce3c8bccc926c0cdf08ef95a&language=en-US&page=' + String(this.pageNumber)
    ).subscribe((data: { results: any }) => {
      let output;
      if (data) {
        output = data.results;
        this.movies = output.map((x: { [x: string]: any }) => new Movie(x));
      } else {
        this.movies = [];
      }
    })
  }

  getRated() {
    this.pageNumber = 1
    return this.http.get('https://api.themoviedb.org/3/movie/top_rated?api_key=170aa506ce3c8bccc926c0cdf08ef95a&language=en-US&page=' + String(this.pageNumber)
    ).subscribe((data: { results: any }) => {
      let output;
      if (data) {
        output = data.results;
        this.movies = output.map((x: { [x: string]: any }) => new Movie(x));
      } else {
        this.movies = [];
      }
    })
  }

  //retireves the next page of movies
  getNextRated() {
    this.pageNumber = this.pageNumber + 1;
    return this.http.get('https://api.themoviedb.org/3/movie/now_playing?api_key=170aa506ce3c8bccc926c0cdf08ef95a&language=en-US&page=' + String(this.pageNumber)
    ).subscribe((data: { results: any }) => {
      let output;
      if (data) {
        output = data.results;
        this.movies = output.map((x: { [x: string]: any }) => new Movie(x));
      } else {
        this.movies = [];
      }
    })
  }

  //retireves the previous page of movies
  getPrevRated() {
    this.pageNumber = this.pageNumber - 1;
    return this.http.get('https://api.themoviedb.org/3/movie/now_playing?api_key=170aa506ce3c8bccc926c0cdf08ef95a&language=en-US&page=' + String(this.pageNumber)
    ).subscribe((data: { results: any }) => {
      let output;
      if (data) {
        output = data.results;
        this.movies = output.map((x: { [x: string]: any }) => new Movie(x));
      } else {
        this.movies = [];
      }
    })
  }


  // addMovie(newMovie: Movie) {
  //   this.movies.push(newMovie);
  //   this.moviesChanged.next(this.movies.slice())
  // }

};
