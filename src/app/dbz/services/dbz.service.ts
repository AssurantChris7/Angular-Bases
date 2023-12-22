import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import {v4 as uudi} from 'uuid'

@Injectable({providedIn: 'root'})
export class DbzService
{
  public characters: Character[]
  = [{ id:uudi(),name:'Krillin',power: 1000 },
  {id:uudi(),name:'Goku',power:9500},
  {id:uudi(),name:'Vegeta',power:7500}];

  onNewCharacter(character:Character):void
  {

    console.log('Add');

    const newCharacter: Character = {id: uudi(),...character}
    console.log(newCharacter.id);
    this.characters.push(newCharacter);

  }

  // onDeleteCharacter(characterIndex:number):void
  // {
  //   this.characters.splice(characterIndex,1);
  // }

    deleteCharaterbyId(uuid:string)
    {
      console.log('Delete');
      console.log(uuid);
      this.characters = this.characters.filter(character => character.id !==uuid);
    }
}
