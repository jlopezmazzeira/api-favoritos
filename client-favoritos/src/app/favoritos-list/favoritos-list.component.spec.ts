import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritosListComponent } from './favoritos-list.component';

describe('FavoritosListComponent', () => {
  let component: FavoritosListComponent;
  let fixture: ComponentFixture<FavoritosListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoritosListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
