import { Component, OnInit } from '@angular/core';
import {EpisodInterfaces} from "../interfaces";
import {EpisodService} from "../services/episod.service";

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css']
})
export class EpisodesComponent implements OnInit {


  episodes:EpisodInterfaces[];
  constructor(private episodServices: EpisodService) { }

  ngOnInit(): void {
    this.episodServices.getAll().subscribe(value => this.episodes=value)
  }


  // ngOnInit():void {
  //   this.episodServices.getAll().subscribe(value => {
  //     // @ts-ignore
  //     this.episodes.map((item)=>{
  //       return item
  //     })
  //   })
  // }



}
