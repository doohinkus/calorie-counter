import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'food-list',
  template: `
  <select (change)="onChange($event.target.value)">
 <option value="200">200</option>
 <option value="300">300</option>
 <option value="400" selected="selected">400</option>
</select>
<ul>
 <li *ngFor="let currentFood of childFoodList">{{currentFood.description}} {{currentFood.food}}
 </li>
</ul>
  `
})

export class FoodListComponent {

 @Input() childFoodList: Food[];
 @Output() clickSender = new EventEmitter();
 filterByCalories: number = 200;

 editButtonHasBeenClicked(foodToEdit: Food) {
    this.clickSender.emit(foodToEdit);
  }
  // onChange(optionFromMenu) {
  //   this.filterByCalories = optionFromMenu;
  // }

}
