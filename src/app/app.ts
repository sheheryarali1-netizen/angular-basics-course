import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SocialLinks } from './social-links/social-links';
import { ResourceLinks } from './resource-links/resource-links';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SocialLinks, ResourceLinks],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly data = signal({
    title: 'Angular Core Deep Dive',
  });
}
