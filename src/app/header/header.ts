import { DatePipe, DecimalPipe, PercentPipe } from '@angular/common';
import { Component, EventEmitter, input, Output, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [DatePipe, DecimalPipe, PercentPipe],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  public readonly title = input.required<string>();

  protected readonly date = signal(new Date());

  protected readonly price = signal(123.456687);

  protected readonly percent = signal(0.54);

  @Output()
  buttonClicked = new EventEmitter<string>();

  public onButtonClicked() {
    this.buttonClicked.emit('Header - button clicked....');
  }
}
