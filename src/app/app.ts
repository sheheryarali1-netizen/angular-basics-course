import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SocialLinks } from './social-links/social-links';
import { ResourceLinks } from './resource-links/resource-links';
import { Header } from './header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SocialLinks, ResourceLinks, Header],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Angular Core Deep Dive');

  public onHeaderClicked(value: string) {
    console.log(value);
  }
}
