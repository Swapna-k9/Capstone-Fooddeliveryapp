import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFooditemComponent } from './search-fooditem.component';

describe('SearchFooditemComponent', () => {
  let component: SearchFooditemComponent;
  let fixture: ComponentFixture<SearchFooditemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchFooditemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFooditemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
