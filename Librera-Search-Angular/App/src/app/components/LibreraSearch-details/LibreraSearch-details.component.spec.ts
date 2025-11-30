import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibreraSearchDetailsComponent } from './LibreraSearch-details.component';

describe('LibreraSearchDetailsComponent', () => {
  let component: LibreraSearchDetailsComponent;
  let fixture: ComponentFixture<LibreraSearchDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LibreraSearchDetailsComponent]
    });
    fixture = TestBed.createComponent(LibreraSearchDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
