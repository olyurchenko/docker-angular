import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  forwardRef,
  viewChild,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  selector: 'app-todo-input',
  standalone: true,
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TodoInputComponent),
      multi: true,
    },
  ],
  imports: [FormsModule],
})
export class TodoInputComponent implements ControlValueAccessor {
  value: string = '';
  onChange: (value: string) => void = () => {};
  onTouched: () => void = () => {};
  input = viewChild<ElementRef<HTMLInputElement>>('input');
  writeValue(value: string) {
    this.value = value ?? '';
  }

  registerOnChange(fn: (value: string) => void) {
    this.onChange = fn;
  }

  handleChange(input: EventTarget | null): void {
    if (input instanceof HTMLInputElement) {
      this.onChange(input.value);
    }
  }

  registerOnTouched(fn: () => void) {
    this.onTouched = fn;
  }
}
