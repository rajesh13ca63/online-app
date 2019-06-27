import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiselectdropdonwComponent } from './multiselectdropdonw.component';

describe('MultiselectdropdonwComponent', () => {
  let component: MultiselectdropdonwComponent;
  let fixture: ComponentFixture<MultiselectdropdonwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiselectdropdonwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiselectdropdonwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
