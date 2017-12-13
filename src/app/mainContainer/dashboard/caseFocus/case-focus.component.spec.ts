import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseFocusComponent } from './case-focus.component';

describe('CaseFocusComponent', () => {
  let component: CaseFocusComponent;
  let fixture: ComponentFixture<CaseFocusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseFocusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseFocusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
