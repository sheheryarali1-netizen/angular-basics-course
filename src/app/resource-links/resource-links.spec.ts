import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceLinks } from './resource-links';

describe('ResourceLinks', () => {
  let component: ResourceLinks;
  let fixture: ComponentFixture<ResourceLinks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResourceLinks]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResourceLinks);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
