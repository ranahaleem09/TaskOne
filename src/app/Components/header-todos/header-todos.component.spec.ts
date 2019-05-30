import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderTodosComponent } from './header-todos.component';

describe('HeaderTodosComponent', () => {
  let component: HeaderTodosComponent;
  let fixture: ComponentFixture<HeaderTodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderTodosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
