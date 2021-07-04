import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../movie.model';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  public movies: Movie[];

  constructor(private moviesService: MoviesService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.movies = this.moviesService.getmovies();
    this.moviesService.moviesChanged.subscribe(movies => {
      this.movies = movies;
    })
  }

  onAddMovie() {
    this.router.navigate(['new'], {relativeTo: this.route})
  }

}
