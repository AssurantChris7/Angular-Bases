
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl:  './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent
{

  @Input()
  public charactersList: Character[]
  = [{id:'',name:'',power: 0 }];

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(uuid?:string):void
  {

    if(!uuid) return;

    console.log('List Component');
    console.log(uuid);
    this.onDelete.emit(uuid);

  }

 }
