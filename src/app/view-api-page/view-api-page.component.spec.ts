import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewApiPageComponent } from './view-api-page.component';

describe('ViewApiPageComponent', () => {
  let component: ViewApiPageComponent;
  let fixture: ComponentFixture<ViewApiPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewApiPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewApiPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
