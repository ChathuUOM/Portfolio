import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalentBaseComponent } from './talent-base.component';

describe('TalentBaseComponent', () => {
  let component: TalentBaseComponent;
  let fixture: ComponentFixture<TalentBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TalentBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TalentBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
