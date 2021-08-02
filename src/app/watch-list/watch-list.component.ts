import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { Movie } from '../movies/movie.model';
import { WatchListService } from './watchList.service';

@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.component.html',
  styleUrls: ['./watch-list.component.css']
})
export class WatchListComponent implements OnInit, OnDestroy {
  movies: Movie[];
  movieWatched = false;
  rating = 0;
  private subs: Subscription;


  constructor(private watchListService: WatchListService, private router: Router) { }
  @ViewChild('ngcarousel', { static: true }) ngCarousel: NgbCarousel;

  ngOnInit(): void {
    this.movies = this.watchListService.getMovies()
    console.log(this.movies)
    this.subs = this.watchListService.watchListMoviesChanged.subscribe(movies => {
        this.movies = movies;
    })
  }

  setReview(data, index) {debugger
    this.watchListService.getMovie(index).rating = data;
    console.log(this.movies);
    this.watchListService.addWatchedMovie(index);
  }

  onMovieWatched() {
    this.movieWatched = true;
  }

  onMovieReviewed(index) {
    this.movieWatched = false;
    this.watchListService.deleteMovie(index);
  }

  onRemove(index) {
    this.watchListService.deleteMovie(index)
  }

  getToPrev() {
    this.ngCarousel.prev()
  }

  goToNext () {
    this.ngCarousel.next()
  }

  viewMovies() {
    this.router.navigate(['/movies']);
  }

  ngOnDestroy() {
    this.subs.unsubscribe()
  }
}
