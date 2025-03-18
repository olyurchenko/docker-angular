import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoItemComponent } from './todo-item.component';

describe('TodoItemComponent', () => {
  let component: TodoItemComponent;
  let fixture: ComponentFixture<TodoItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TodoItemComponent],
    });
    fixture = TestBed.createComponent(TodoItemComponent);
    component = fixture.componentInstance;
    component.task = 'Test Task';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit remove event', () => {
    spyOn(component.remove, 'emit');
    component.remove.emit();
    expect(component.remove.emit).toHaveBeenCalled();
  });
});
