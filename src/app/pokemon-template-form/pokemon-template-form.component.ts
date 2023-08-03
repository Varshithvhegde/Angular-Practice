import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { Pokemon, PokemonType } from '../models/pokemon';

@Component({
  selector: 'app-pokemon-template-form',
  templateUrl: './pokemon-template-form.component.html',
  styleUrls: ['./pokemon-template-form.component.css']
})
export class PokemonTemplateFormComponent implements OnInit {

  pokemon ! :Pokemon;
  pokemonType: PokemonType[] =[{
    key :0,
    value :"fire"
  },
  {
    key :1,
    value :"electric"
  }]
  constructor(private pokemonService :PokemonService) { }
  toggleIsCool(object : any){
    console.log('====================================');
    console.log(object);
    console.log('====================================');
    // this.pokemon.isCool = !this.pokemon.isCool;
  }

  handleSubmit(object : any){
    console.log('====================================');
    console.log(object.form.value);
    console.log('====================================');
  }
  ngOnInit() {
    this.pokemonService.getPokemon(1).subscribe((data : Pokemon)=>{
      this.pokemon = data;
    })
  }

}
