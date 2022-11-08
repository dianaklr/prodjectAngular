import { Component, Input, OnInit,  } from '@angular/core';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
    @Input()
    // @ts-ignore
  character:CharacterInterfaces;
  constructor() { }

  ngOnInit(): void {
  }

}
function Intup() {
    throw new Error('Function not implemented.');
}

