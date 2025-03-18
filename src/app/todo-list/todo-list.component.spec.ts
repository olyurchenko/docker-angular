import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoListComponent } from './todo-list.component';
import { TodoService } from '../core/services/todo.service';
import { TodoInputComponent } from '../todo-input/todo-input.component';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { FormsModule } from '@angular/forms';

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;
  let todoService: TodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        TodoListComponent,
        TodoInputComponent,
        TodoItemComponent,
        FormsModule,
      ],
      providers: [TodoService],
    });
    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    todoService = TestBed.inject(TodoService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a task', () => {
    component.newTask = 'New Task';
    component.addTask();
    expect(todoService.tasks()).toContain('New Task');
  });

  it('should not add an empty task', () => {
    component.newTask = '   ';
    component.addTask();
    expect(todoService.tasks().length).toBe(0);
  });

  it('should remove a task', () => {
    todoService.addTask('Task to Remove');
    fixture.detectChanges();

    component.removeTask(0);
    fixture.detectChanges();

    expect(todoService.tasks().length).toBe(0);
  });
});
