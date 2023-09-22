import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaPokemonPage } from './lista-pokemon.page';

describe('ListaPokemonPage', () => {
  let component: ListaPokemonPage;
  let fixture: ComponentFixture<ListaPokemonPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListaPokemonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
