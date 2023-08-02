import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent implements OnInit {
  pokemons: Pokemon[] = [
    {
      id: 1,
      name: 'Pikachu',
      type: 'Electric',
      isCool: true,
    },
    {
      id: 2,
      name: 'Charmander',
      type: 'Fire',
      isCool: false,
    },
    {
      id: 3,
      name: 'Eeve',
      type: 'Normal',
      isCool: true,
    },
  ];
  constructor() {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
