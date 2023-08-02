import { Component ,EventEmitter,Input, OnInit, Output, SimpleChanges} from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';
import { OnChanges } from '@angular/core';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent{

  @Input()
  detail ! : Pokemon;

  @Output()
  remove : EventEmitter<any> = new EventEmitter();
  
  onRemove(){
    this.remove.emit(this.detail);
  }
  
  constructor(){}
}
