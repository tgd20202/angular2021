import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsCatalogComponent } from './buttons-catalog.component';

describe('ButtonsCatalogComponent', () => {
  let component: ButtonsCatalogComponent;
  let fixture: ComponentFixture<ButtonsCatalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonsCatalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonsCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
