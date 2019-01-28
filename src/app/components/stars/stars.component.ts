import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {

  private _rating = 0;
  private maxStar = 5;
  stars: boolean[] = [];
  @Input() readonly = true;
  @Input() get rating() {
    return this._rating;
  }

  set rating(value: number) {
    this._rating = value || 0;
    this.stars = Array(this.maxStar).fill(true, 0, this.rating);
  }
  constructor() { }
@Output() ratingChange = new EventEmitter<number>();
  ngOnInit() {
  }

  fillStartsWithColor(index) {
    if (!this.readonly) {
      this.rating = index + 1;
      this.ratingChange.emit(this.rating);
    }
  }

}
