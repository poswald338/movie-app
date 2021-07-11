import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent {

  constructor() { }
  @Output() close = new EventEmitter<void>();
  @Input() starRating: number;

  onClose(){
    this.close.emit()
  }

}
