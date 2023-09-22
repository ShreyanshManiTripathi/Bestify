import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPreScoreComponent } from './view-pre-score.component';

describe('ViewPreScoreComponent', () => {
  let component: ViewPreScoreComponent;
  let fixture: ComponentFixture<ViewPreScoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPreScoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPreScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
