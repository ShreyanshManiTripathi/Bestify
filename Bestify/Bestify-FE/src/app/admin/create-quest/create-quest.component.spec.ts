import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateQuestComponent } from './create-quest.component';

describe('CreateQuestComponent', () => {
  let component: CreateQuestComponent;
  let fixture: ComponentFixture<CreateQuestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateQuestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateQuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
