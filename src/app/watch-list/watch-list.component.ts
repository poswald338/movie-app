import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { Movie } from '../movies/movie.model';
import { WatchListService } from './watchList.service';

@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.component.html',
  styleUrls: ['./watch-list.component.css']
})
export class WatchListComponent implements OnInit {
  movies: Movie[];
  movieWatched = false;
  rating = 0;


  constructor(private watchListService: WatchListService) { }
  @ViewChild('ngcarousel', { static: true }) ngCarousel: NgbCarousel;

  ngOnInit(): void {
    this.movies = this.watchListService.getMovies()
    this.watchListService.watchListMoviesChanged.subscribe(movies => {
      this.movies = movies;
    })
  }

  onMovieWatched(index) {
    this.movieWatched = true;
    this.watchListService.addWatchedMovie(index);

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
}
