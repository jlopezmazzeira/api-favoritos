import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritoDetailComponent } from './favorito-detail.component';

describe('FavoritoDetailComponent', () => {
  let component: FavoritoDetailComponent;
  let fixture: ComponentFixture<FavoritoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoritoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
