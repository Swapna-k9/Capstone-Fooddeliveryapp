import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteFooditemComponent } from './delete-fooditem.component';

describe('DeleteFooditemComponent', () => {
  let component: DeleteFooditemComponent;
  let fixture: ComponentFixture<DeleteFooditemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteFooditemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteFooditemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
