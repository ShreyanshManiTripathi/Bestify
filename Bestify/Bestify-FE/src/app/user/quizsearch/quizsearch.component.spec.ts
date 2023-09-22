import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizsearchComponent } from './quizsearch.component';

describe('QuizsearchComponent', () => {
  let component: QuizsearchComponent;
  let fixture: ComponentFixture<QuizsearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizsearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
