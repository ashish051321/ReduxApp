import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrocerryListComponent } from './grocerry-list.component';

describe('GrocerryListComponent', () => {
  let component: GrocerryListComponent;
  let fixture: ComponentFixture<GrocerryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrocerryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrocerryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
