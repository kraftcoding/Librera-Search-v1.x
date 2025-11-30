import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibreraSearchsListComponent } from './LibreraSearch-list.component';

describe('LibreraSearchsListComponent', () => {
  let component: LibreraSearchsListComponent;
  let fixture: ComponentFixture<LibreraSearchsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LibreraSearchsListComponent]
    });
    fixture = TestBed.createComponent(LibreraSearchsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
