import { Injectable } from '@angular/core';

type dict = { word: string, translation: string}

@Injectable({
  providedIn: 'root'
})
export class ListOfWordsService {

  private dictionary: Array<dict> = [];

  getData(): dict[] {
      // console.log (this.dictionary);
      return this.dictionary;
}

  addData(t: dict){         
    this.dictionary.push(t);
  }

  
  constructor() { }
}
