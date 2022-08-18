import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CausesModule } from '../inhouse/causes/causes.module';
import { PlanetModule } from '../inhouse/planet/planet.module';
import { PeopleModule } from '../inhouse/people/people.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CausesModule,
    PlanetModule,
    PeopleModule,
  ]
})
export class Step2Module { }
