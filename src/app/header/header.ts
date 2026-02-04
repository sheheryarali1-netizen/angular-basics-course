import { Component, EventEmitter, input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  public readonly title = input.required<string>();

  @Output()
  buttonClicked = new EventEmitter<string>();

  public onButtonClicked() {
    this.buttonClicked.emit('Header - button clicked....');
  }
}
