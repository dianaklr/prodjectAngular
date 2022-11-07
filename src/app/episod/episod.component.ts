import {Component, Input, OnInit} from '@angular/core';
import {EpisodInterfaces} from "../interfaces";

@Component({
  selector: 'app-episod',
  templateUrl: './episod.component.html',
  styleUrls: ['./episod.component.css']
})
export class EpisodComponent implements OnInit {

  @Input()
    // @ts-ignore
  episod:EpisodInterfaces;
  constructor() { }

  ngOnInit(): void {
  }

}
