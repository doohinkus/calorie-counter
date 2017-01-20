import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'food-list',
  template: `
<select (change)="onChange($event.target.value)" class="select-style">
  <option value="allFoods" selected="selected">Show All</option>
  <option value="highCalFoods">Show High Calorie (greater than 500)</option>
  <option value="lowCalFoods">Show Low Calorie (under 500)</option>
</select>
<div class="panel panel-primary" *ngFor="let currentFood of childFoodList | calorie:filterByCalories">
<div class="panel-heading">
   <h1>{{currentFood.food}} <span class="label label-warning">{{currentFood.calories}} Calories</span></h1>

 </div>
  <div class="panel-body">
    {{currentFood.description}}

  </div>
  <div class="panel-footer">
 <button (click)="editButtonHasBeenClicked(currentFood)" class="btn btn-warning center-block text-center">Edit!</button>
  </div>
</div>
  `
})

export class FoodListComponent {

 @Input() childFoodList: Food[];
 @Output() clickSender = new EventEmitter();
 filterByCalories: number = 500;

 editButtonHasBeenClicked(foodToEdit: Food) {
    this.clickSender.emit(foodToEdit);

  }
  onChange(optionFromMenu) {
    this.filterByCalories = optionFromMenu;
  }

}
