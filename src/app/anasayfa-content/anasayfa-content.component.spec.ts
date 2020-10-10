import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnasayfaContentComponent } from './anasayfa-content.component';

describe('AnasayfaContentComponent', () => {
  let component: AnasayfaContentComponent;
  let fixture: ComponentFixture<AnasayfaContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnasayfaContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnasayfaContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
