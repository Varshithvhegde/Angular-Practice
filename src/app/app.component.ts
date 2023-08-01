import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import {FormsModule } from "@angular/forms";

interface Pokemon{
  id : number,
  name : String,
  type : String,
  isCool :boolean,
  isStylish : boolean
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // title :string="Basket of Pokemon";
  // imgSrc: string ="https://iheartcraftythings.com/wp-content/uploads/2019/04/pokemon-easter-basket-8.jpg"
  // alt:string ="None"
  // favoriteAnimal :String  = "Lion";

  pokemonName : string ="";
  constructor(){
  
  }
  // handleClick(value :any){
  //   console.log(value);
  // }

  // pokemons : Pokemon[]=[{
  //   id:1,
  //   name:"Pikachu",
  //   type :"Eletric",
  //   isCool :false,
  //   isStylish : true
  // },{
  //   id:2,
  //   name : "IceEdge",
  //   type :"Ice",
  //   isCool : true,
  //   isStylish : false
  // },{
  //   id:3,
  //   name:"Eeve",
  //   type :"Normal",
  //   isCool :true,
  //   isStylish : true
  // }]

  handleChange(event : any){
    this.pokemonName = event.target.value;
  }

}
