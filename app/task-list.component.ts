// import { Component, Input, Output, EventEmitter } from '@angular/core';
// import { Task } from './task.model';
//
// @Component({
//   selector: 'task-list',
//   template: `
//
//
//   `
// })
//
// export class TaskListComponent {
//
//  @Input() childTaskList: Task[];
//  @Output() clickSender = new EventEmitter();
//  filterByCompleteness: string = "incompleteTasks";
//
//  editButtonHasBeenClicked(taskToEdit: Task) {
//     this.clickSender.emit(taskToEdit);
//   }
//   isDone(clickedTask: Task) {
//     if(clickedTask.done === true) {
//       alert("This task is done!");
//     } else {
//       alert("This task is not done. Better get to work!");
//     }
//   }
//
//   onChange(optionFromMenu) {
//     this.filterByCalories = optionFromMenu;
//   }
//
//   priorityColor(currentTask){
//     if (currentTask.priority === 3){
//       return "bg-danger";
//     } else if (currentTask.priority === 2) {
//       return  "bg-warning";
//     } else {
//       return "bg-info";
//     }
//   }
//   toggleDone(clickedTask: Task, setCompleteness: boolean) {
//     clickedTask.done = setCompleteness;
//   }
// }
