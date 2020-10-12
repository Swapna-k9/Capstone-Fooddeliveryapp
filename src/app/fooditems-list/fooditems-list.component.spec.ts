import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooditemsListComponent } from './fooditems-list.component';

describe('FooditemsListComponent', () => {
  let component: FooditemsListComponent;
  let fixture: ComponentFixture<FooditemsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooditemsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooditemsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
