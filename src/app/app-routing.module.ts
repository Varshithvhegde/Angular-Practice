import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path : "",component : HomeComponent , pathMatch : "full"},
  {path : 'pokemon', loadChildren : () =>import ('./pokemon-base/pokemon-base.module').then(m => m.PokemonBaseModule)
    
  },
  {path : "**",component : NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
