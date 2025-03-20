import { Component } from '@angular/core';
import { TodoService } from '../core/services/todo.service';
import { TodoInputComponent } from '../todo-input/todo-input.component';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [TodoInputComponent, TodoItemComponent, FormsModule],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent {
  newTask = '';

  constructor(public todoService: TodoService) {}

  addTask() {
    if (this.newTask.trim()) {
      this.todoService.addTask(this.newTask.trim());
      this.newTask = '';
    }
  }

  removeTask(index: number) {
    this.todoService.removeTask(index);
  }
}
