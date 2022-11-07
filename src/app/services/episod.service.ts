import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


import { EpisodInterfaces } from '../interfaces';
import {urls} from "../configs";

@Injectable({
  providedIn: 'root'
})
export class EpisodService {

  constructor(private httpClient :HttpClient) {

  }
  getAll():Observable<EpisodInterfaces[]>{
    return this.httpClient.get<EpisodInterfaces[]>(urls.episodes)
  }
  getById(id:number):Observable<EpisodInterfaces>{
    return this.httpClient.get<EpisodInterfaces>(`${urls.episodes}/${id}`)
  }


}
