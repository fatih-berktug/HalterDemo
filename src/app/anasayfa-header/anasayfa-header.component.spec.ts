import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnasayfaHeaderComponent } from './anasayfa-header.component';

describe('AnasayfaHeaderComponent', () => {
  let component: AnasayfaHeaderComponent;
  let fixture: ComponentFixture<AnasayfaHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnasayfaHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnasayfaHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
