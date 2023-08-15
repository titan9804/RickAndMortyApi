import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { RouterModule } from '@angular/router';
import { CharacterComponent } from './character.component';

const myComponent = [CharacterDetailsComponent, CharacterListComponent, CharacterComponent];

@NgModule({
  declarations: [...myComponent],
  imports: [CommonModule, RouterModule],
  exports: [...myComponent],
})
export class CharactersModule {}
