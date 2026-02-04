import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputField } from './input-field/input-field';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, InputField],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly data = signal({
    title: 'Angular Core Deep Dive',
  });

  public onLogoClicked() {
    alert('Hello World!');
  }

  public onKeyUp(value: string) {
    this.data().title = value;
  }
}
