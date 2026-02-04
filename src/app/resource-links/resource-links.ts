import { NgClass } from '@angular/common';
import { Component, signal } from '@angular/core';

interface Link {
  id: number;
  title: string;
  link: string;
}

@Component({
  selector: 'app-resource-links',
  imports: [NgClass],
  templateUrl: './resource-links.html',
  styleUrl: './resource-links.css',
})
export class ResourceLinks {
  protected readonly links = signal<Link[]>([
    { id: 1, title: 'Explore the Docs', link: 'https://angular.dev' },
    { id: 2, title: 'Learn with Tutorials', link: 'https://angular.dev/tutorials' },
    {
      id: 3,
      title: 'Prompt and best practices for AI',
      link: 'https://angular.dev/ai/develop-with-ai',
    },
    { id: 4, title: '', link: 'https://angular.dev/tools/cli' },
    {
      id: 5,
      title: 'Angular Language Service',
      link: 'https://angular.dev/tools/language-service',
    },
    { id: 6, title: 'Angular DevTools', link: 'https://angular.dev/tools/devtools' },
  ]);

  protected readonly emptyLinks = signal<Link[]>([]);

  public generateClasses(isFirst: boolean, isLast: boolean, isEven: boolean, isOdd: boolean) {
    if (isFirst) return ['is-first'];
    if (isLast) return ['is-last'];
    if (isEven) return ['is-even'];
    if (isOdd) return ['is-odd'];
    return [];
  }
}
