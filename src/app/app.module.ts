import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonBaseModule } from './pokemon-base/pokemon-base.module';
import { PokemonService } from './services/pokemon.service';
import { PokemonTemplateFormComponent } from './pokemon-template-form/pokemon-template-form.component';

@NgModule({
  declarations: [	
    AppComponent,
      PokemonTemplateFormComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    PokemonBaseModule,
    
  ],
  providers: [
    PokemonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
