import { Injectable } from '@angular/core';
import { IMovie } from '../share/interfaces';
import { Storage } from '@ionic/storage';
import { error } from 'protractor';
import { kMaxLength } from 'buffer';

@Injectable({
  providedIn: 'root'
})
export class MoviedbserviceService {

  auxMovie: IMovie;
  auxMovieList: IMovie[] = [];

  constructor(private storage: Storage) { }

  //Stores a value
  setItem(reference: string, value: IMovie) {
    this.storage.set(reference, {id: value.id, name: value.name, genre: value.genre,
    date: value.date, cover: value.cover, description: value.description}).then((data)=>
     console.log('Stored first item!', data),
     error=>console.error('Error storing item', error)
     );
  }

  // Gets a stored item
  getItem(reference):Promise<IMovie>{
    return this.storage.get(reference);
  }
  // check if it is empty
  empty(){
    return this.storage.keys().then(
      (data)=>{return true},
      error=>{return false}
    );
  }

  // Retrieving all keys
  getAll():Promise<IMovie[]>{
    return this.storage.keys().then( (k)=>
    {
      k.forEach(element=> {
        this.getItem(element).then(
          (data:IMovie)=> this.auxMovieList.push(data)
        );
      });
      return this.auxMovieList;
    });
  }

  // Removes a single stored item
  remove(reference: string) {
    this.storage.remove(reference).then(
      data=> console.log(data),
      error=>console.error(error)
    );
  }

  // Removes all stored values
  clear(){
    this.storage.clear().then(
      data=>console.log(data),
      error=>console.error(error)
    );
  }
  
}
