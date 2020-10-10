import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnasayfaMainSliderComponent } from './anasayfa-main-slider.component';

describe('AnasayfaMainSliderComponent', () => {
  let component: AnasayfaMainSliderComponent;
  let fixture: ComponentFixture<AnasayfaMainSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnasayfaMainSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnasayfaMainSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
