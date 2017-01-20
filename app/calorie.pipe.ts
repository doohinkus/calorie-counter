
import {Pipe, PipeTransform} from '@angular/core';
import {Food} from './food.model';

@Pipe({
  name: "calorie",
  pure: false
})
export class CaloriePipe implements PipeTransform {


  transform(input: Food[], desiredCalories) {
    var output: Food[] = [];

      for (var i = 0; i < input.length; i++) {
        if (input[i].calories > desiredCalories) {
          output.push(input[i]);
        }
      }
      return output;
  }


}
