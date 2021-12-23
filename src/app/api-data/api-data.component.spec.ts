import { ComponentFixture, TestBed } from '@angular/core/testing';

import { APIDataComponent } from './api-data.component';

describe('APIDataComponent', () => {
  let component: APIDataComponent;
  let fixture: ComponentFixture<APIDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ APIDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(APIDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
