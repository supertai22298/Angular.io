import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrensComponent } from './childrens.component';

describe('ChildrensComponent', () => {
  let component: ChildrensComponent;
  let fixture: ComponentFixture<ChildrensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildrensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildrensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
