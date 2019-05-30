import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ATodoComponent } from './a-todo.component';

describe('ATodoComponent', () => {
  let component: ATodoComponent;
  let fixture: ComponentFixture<ATodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ATodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ATodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
