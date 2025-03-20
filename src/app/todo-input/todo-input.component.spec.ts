import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoInputComponent } from './todo-input.component';
import { FormsModule } from '@angular/forms';

describe('TodoInputComponent', () => {
  let component: TodoInputComponent;
  let fixture: ComponentFixture<TodoInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TodoInputComponent, FormsModule],
    });
    fixture = TestBed.createComponent(TodoInputComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update value on input', () => {
    component.writeValue('Test');
    expect(component.value).toBe('Test');
  });
});
