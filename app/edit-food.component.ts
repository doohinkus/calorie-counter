import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'edit-food',
  template: `
    <div>
        <div *ngIf="childSelectedFood">

          <h3>{{childSelectedFood.food}}</h3>
          <hr>
          <h3>Edit Food</h3>
          <label>Enter Food:</label>
          <input [(ngModel)]="childSelectedFood.food" class="form-control">
          <label>Enter Description:</label>
          <input [(ngModel)]="childSelectedFood.description" class="form-control">
          <label>Enter Calories:</label>
          <input [(ngModel)]="childSelectedFood.calories" class="form-control">
          <button (click)="doneButtonClicked()" class="btn btn-success">Done</button>
        </div>
      </div>
  `
})

export class EditFoodComponent {
  @Input() childSelectedFood: Food;
  @Output() doneButtonClickedSender = new EventEmitter();

    doneButtonClicked() {
     this.doneButtonClickedSender.emit();
   }
 }
