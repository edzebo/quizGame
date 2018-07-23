import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WrongAnswerComponent } from './wrong-answer.component';

describe('WrongAnswerComponent', () => {
  let component: WrongAnswerComponent;
  let fixture: ComponentFixture<WrongAnswerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WrongAnswerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrongAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
