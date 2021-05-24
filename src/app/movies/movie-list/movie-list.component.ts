import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie.model';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  public movies: Movie[];

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    debugger
    this.movies = this.moviesService.getmovies();
  }

}
