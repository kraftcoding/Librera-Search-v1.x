import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLibreraSearchComponent } from './add-LibreraSearch.component';

describe('AddLibreraSearchComponent', () => {
  let component: AddLibreraSearchComponent;
  let fixture: ComponentFixture<AddLibreraSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddLibreraSearchComponent]
    });
    fixture = TestBed.createComponent(AddLibreraSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
