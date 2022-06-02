import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-example',
  template: `
    <p>
      example works with {{ anInput }}
    </p>
  `,
  styles: []
})
export class ExampleComponent {

  @Input()
  anInput = "default"
}
