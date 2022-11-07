import { Component, OnInit } from '@angular/core';
import {EpisodInterfaces} from "../interfaces";
import {EpisodService} from "../services/episod.service";

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css']
})
export class EpisodesComponent implements OnInit {
  pageSeparator:boolean;
  responce:any;
  episodes:EpisodInterfaces[];
  constructor(private episodServices: EpisodService) { }

    ngOnInit(): void {
    this.episodServices.getAll()
      .subscribe(
        (response:any)=>{
          this.episodes = response.results;
        });
  }

  pagesSeparatorNext(){
    this.pageSeparator = false
  }
  pagesSeparatorPrew(){
    this.pageSeparator = true
  }










}
