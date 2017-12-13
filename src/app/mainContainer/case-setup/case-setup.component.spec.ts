import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseSetupComponent } from './case-setup.component';

describe('CaseSetupComponent', () => {
  let component: CaseSetupComponent;
  let fixture: ComponentFixture<CaseSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
