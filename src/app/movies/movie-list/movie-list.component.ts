import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
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
              private route: ActivatedRoute,
              private config: NgbDropdownConfig
              ) {
                config.placement = "right";
                config.autoClose = true;
              }

  ngOnInit(): void {
    this.getPop()
    this.movieSub = this.moviesService.moviesChanged.subscribe(
      (movies: Movie[]) => {
        this.movies = movies
      }
    );
  }

  getPop() {
    this.moviesService.getPopularMovies();
    setTimeout(() => {
      this.onSetMovies();
    }, 300)
  }

  getInTheatre() {
    this.moviesService.getTheatre();
    setTimeout(() => {
      this.onSetMovies();
    }, 300)
    console.log(this.movies)
  }

  getTopRated() {
    this.moviesService.getRated();
    setTimeout(() => {
      this.onSetMovies();
    }, 300)
    console.log(this.movies)
  }


  onAddMovie() {
    this.router.navigate(['new'], {relativeTo: this.route})
  }

  onSetMovies() {
    this.movies = this.moviesService.getmovies();
  }

  getNextPage() {
    this.moviesService.getNextPop();
    setTimeout(() => {
      this.onSetMovies();
    }, 300)
  }

  getPrevPage() {
    this.moviesService.getPrevPop();
    setTimeout(() => {
      this.onSetMovies();
    }, 300)
  }

  ngOnDestroy() {
    this.movieSub.unsubscribe()
  }

}
