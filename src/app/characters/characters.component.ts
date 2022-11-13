import { Component, OnInit } from '@angular/core';
import { CharacterInterfaces } from '../interfaces';
import { CharacterService } from '../services';

// @ts-ignore
@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})


export class CharactersComponent implements OnInit {

  responce:any;
  characters:CharacterInterfaces[];
  idCharacters: any = 1;

  constructor(private characterServices: CharacterService) {
    console.log(this.characterServices)
  }

  ngOnInit(): void {
    this.characterServices.getAll()
      .subscribe(
        (response:any)=>{
          this.characters = response.results ;
          this.idCharacters = response.id;
        });
  }


}
