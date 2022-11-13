import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


import {CharacterInterfaces} from '../interfaces';
import {urls} from "../configs";


@Injectable({
  providedIn: 'root'
})
export class CharacterService{

  constructor(private httpClient :HttpClient) {

  }
  getAll(id= 1):Observable<CharacterInterfaces[]>{
    // return this.httpClient.get<CharacterInterfaces[]>(urls.characters)
    // @ts-ignore
    return this.httpClient.get<CharacterInterfaces[]>(`${urls.characters}`)

  }
  getById(id:number):Observable<CharacterInterfaces>{
    return this.httpClient.get<CharacterInterfaces>(`${urls.characters}/${id}`)
  }
}
