import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {EpisodInterfaces} from "../interfaces";
import {EpisodService} from "../services/episod.service";
import {MatPaginator} from "@angular/material/paginator";
import {Router} from "@angular/router";
import { map } from 'rxjs';
import * as url from "url";


@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css']
})


export class EpisodesComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator)
  paginator:MatPaginator
  responce: any;
  episodes: EpisodInterfaces[];
  total_items: number;
  private activatedRoute: any;



  constructor(private episodServices: EpisodService, private router: Router) {
  }


  ngOnInit(): void {
    this.episodServices.getAll()
      .subscribe(
        (response: any) => {
          this.episodes = response.results;
          let urlCharacters = this.episode.characters

        });
  }
  episode: any;

  ngAfterViewInit(): void {
    this.paginator.page.subscribe((page)=>{
    this.router.navigate([], {queryParams:{page:page.pageIndex+1}})

    })

  }




}

