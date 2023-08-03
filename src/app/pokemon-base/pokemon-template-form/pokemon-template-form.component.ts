import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon, PokemonType } from '../../models/pokemon';
import { ActivatedRoute, Params, Router } from '@angular/router';

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
  constructor(private pokemonService :PokemonService , private router  : Router, private activatedRoute : ActivatedRoute) { }
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
    const id = this.activatedRoute.snapshot.params['id'];
      this.pokemonService.getPokemon(id).subscribe((data : Pokemon)=>{
        this.pokemon = data;
      })
      
    
  }

  back() : void {
    this.router.navigate(['/pokemon'])
  }

}
