import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceComponentComponent } from './resource-component.component';

describe('ResourceComponentComponent', () => {
  let component: ResourceComponentComponent;
  let fixture: ComponentFixture<ResourceComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourceComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
