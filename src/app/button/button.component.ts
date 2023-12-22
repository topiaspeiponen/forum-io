import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html'
})
export class ButtonComponent {
  @Input({ required: true }) text: string = '';
  @Input({ required: true }) onClick: () => void = () => {};
  @Input() variant: 'primary' | 'secondary' | 'accent' = 'primary';

}
