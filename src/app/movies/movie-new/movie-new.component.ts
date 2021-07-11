import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../movie.model';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movie-new',
  templateUrl: './movie-new.component.html',
  styleUrls: ['./movie-new.component.css']
})
export class MovieNewComponent implements OnInit {
  @ViewChild('f') newMovieForm: NgForm;

  constructor(private router:Router,
              private route: ActivatedRoute,
              private moviesService: MoviesService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.newMovieForm);
    const newMovie = new Movie(
      this.newMovieForm.value['movieName'],
      this.newMovieForm.value['description'],
      this.newMovieForm.value['runtime'],
      this.newMovieForm.value['imgURL'],
      false
      );

      this.moviesService.addMovie(newMovie)

    this.onCancel(this.newMovieForm)
  }

  onClear(form: NgForm) {
    form.reset();
  }

  onCancel(form: NgForm){
    form.reset();
    this.router.navigate(["../"], {relativeTo: this.route})
  }

}
