import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibreraTextSearchListComponent } from './LibreraSearch-contents.component';

describe('LibreraTextSearchListComponent', () => {
  let component: LibreraTextSearchListComponent;
  let fixture: ComponentFixture<LibreraTextSearchListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LibreraTextSearchListComponent]
    });
    fixture = TestBed.createComponent(LibreraTextSearchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
