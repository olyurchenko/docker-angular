import { TestBed } from '@angular/core/testing';
import { TodoService } from './todo.service';

describe('TodoService', () => {
  let service: TodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoService);
  });

  it('should add a task', () => {
    service.addTask('New Task');
    expect(service.tasks()).toContain('New Task');
  });

  it('should remove a task', () => {
    service.addTask('Task to Remove');
    service.removeTask(0);
    expect(service.tasks().length).toBe(0);
  });
});
