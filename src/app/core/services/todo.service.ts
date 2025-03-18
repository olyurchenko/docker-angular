import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  tasks = signal<string[]>([]);

  addTask(task: string) {
    this.tasks.update((tasks) => [...tasks, task]);
  }

  removeTask(index: number) {
    this.tasks.update((tasks) => tasks.filter((_, i) => i !== index));
  }
}
