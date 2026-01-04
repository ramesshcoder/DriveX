import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: false,
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {
  @Input() label: string = 'Button';
  @Input() icon?: string;

  @Input() severity: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'help' | 'danger' =
    'primary';

  @Input() outlined: boolean = false;
  @Input() text: boolean = false;
  @Input() rounded: boolean = true;
  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;
}
