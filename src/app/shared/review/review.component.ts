import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent {
  @ViewChild('form') ratingForm: NgForm;

  constructor() { }
  @Output() close = new EventEmitter<void>();
  @Output() rating = new EventEmitter<void>();
  @Input() starRating: number;

  onSubmit() {
    console.log(this.ratingForm.value);
    this.rating.emit(this.ratingForm.value)
    this.onClose();
  }

  onClose(){
    this.close.emit()
  }

}
