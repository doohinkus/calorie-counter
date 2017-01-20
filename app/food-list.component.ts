import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'food-list',
  template: `
<select (change)="onChange($event.target.value)">
  <option value="allFoods" selected="selected">Show All</option>
  <option value="highCalFoods">Show High Calorie (greater than 500)</option>
  <option value="lowCalFoods">Show Low Calorie (under 500)</option>
</select>
<ul>
 <li *ngFor="let currentFood of childFoodList | calorie:filterByCalories">{{currentFood.description}} {{currentFood.food}}
 </li>
</ul>
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
