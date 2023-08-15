import { Component, ChangeDetectionStrategy, Input } from '@angular/core'

import { Character } from '@app/shared/interface/character.interface';

@Component({
  selector: 'app-character',
  template: `
  <div class="card">
      <div class="image">
        <a [routerLink]="['/character-details', character.id]">
          <img
            [src]="character.image"
            [alt]="character.name"
            class="card-img-top"
            />
        </a>
      </div>
       <div class="car-inner">
          <div class="header">
            <a [routerLink]="['/character-details', character.id]">
              <h2>{{character.name}}</h2>
            </a>
            <h4 class="text-muted">{{character.gender}}</h4>
            <div class="pointText">
              <div class="point" [ngClass]="character.status === 'Alive' ? 'Alive' : (character.status === 'Dead' ? 'Dead' : 'unknown')"></div>

              <h3 class="text-muted">{{character.status}}</h3>
            </div>
            <small class="text-muted" style="display: block;">{{character.created | date}}</small>
          </div>
       </div>
    </div>
  `,
  changeDetection:ChangeDetectionStrategy.OnPush
})

export class CharacterComponent{
  @Input() character!:Character;
}
