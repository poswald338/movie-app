import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/movies/movie.model';
import { WatchListService } from '../watchList.service';

@Component({
  selector: 'app-watch-list-movie',
  templateUrl: './watch-list-movie.component.html',
  styleUrls: ['./watch-list-movie.component.css']
})
export class WatchListMovieComponent implements OnInit {

  @Input() movie: Movie;
  @Input() index: number;

  movieWatched = false;
  rating = 0;

  constructor(private router: Router,
    private watchListService: WatchListService) { }

  ngOnInit(): void {
  }

  onMovieWatched() {
    this.movieWatched = true;
    this.watchListService.addWatchedMovie(this.index);

  }

  onMovieReviewed() {
    this.movieWatched = false;
    this.watchListService.deleteMovie(this.index);
  }

  onRemove() {
    this.watchListService.deleteMovie(this.index)
  }

}
