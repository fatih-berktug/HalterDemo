import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnasayfaFooterComponent } from './anasayfa-footer.component';

describe('AnasayfaFooterComponent', () => {
  let component: AnasayfaFooterComponent;
  let fixture: ComponentFixture<AnasayfaFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnasayfaFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnasayfaFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
