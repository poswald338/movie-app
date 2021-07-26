import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Movie } from '../movie.model';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  public movies: Movie[] = [];
  private movieSub: Subscription

  constructor(private moviesService: MoviesService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.movies = this.moviesService.getmovies();
    // this.moviesService.moviesChanged.subscribe(movies => {
    //   this.movies = movies;
    // })
    this.moviesService.getPopularMovies();
    this.movieSub = this.moviesService.moviesChanged.subscribe(
      (movies: Movie[]) => {
        this.movies = movies
      }
    );
    this.movies = this.moviesService.getmovies();
  }

  onAddMovie() {
    this.router.navigate(['new'], {relativeTo: this.route})
  }

  onSetMovies() {
    this.movies = this.moviesService.getmovies();
  }

}
