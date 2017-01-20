import { Component } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
      <h1>Calorie Counter</h1>
      <new-food (newFoodSender)="addFood($event)"></new-food>
      <edit-food [childSelectedFood]="selectedFood" (doneButtonClickedSender)="finishedEditing()"></edit-food>
      <food-list [childFoodList]="masterFoodList" (clickSender)="editFood($event)"></food-list>
      <hr>

  </div>
  `
})

export class AppComponent {

  selectedFood = null;


  masterFoodList: Food[] = [
  new Food('Donut', 'Old Fashioned Glazed donut from Joe\'s Donuts in Sandy', 200),
  new Food('Potatoe Chips', 'Kettle Cooked Potatoe Chips from Cape Cod', 200),
  new Food('Pizza', 'Cheese pizza from Epicodus Pizzeria App', 500),
  new Food('Veggie Burger', 'Vegan Hamburger from Joe\'s Vegan Place in Sandy', 300)

  ];
  editFood(clickedFood) {
    this.selectedFood = clickedFood;

  }
  addFood(newFoodFromChild: Food) {
   this.masterFoodList.push(newFoodFromChild);
 }


  finishedEditing() {
    this.selectedFood = null;
  }

}
