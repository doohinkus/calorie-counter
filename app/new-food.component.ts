import { Component, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'new-food',
  template: `
  <h1>New Food</h1>
   <div>
     <label>Enter Food Name:</label>
     <input #newFood>
   </div>
   <div>
     <label>Enter Food Description:</label>
     <input #newDescription>
   </div>
   <div>
     <label>Enter Food Calories:</label>
     <input #newCalories>
   </div>
   <button (click)="submitForm(newFood.value, newDescription.value, newCalories.value)">Add</button>
  `
})

export class NewFoodComponent {
  @Output() newFoodSender = new EventEmitter();

  submitForm(food:string ,description: string, calories: number) {
    var newFoodToAdd: Food = new Food(food, description, calories);
    this.newFoodSender.emit(newFoodToAdd);
  }

}
