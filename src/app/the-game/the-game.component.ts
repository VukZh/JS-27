import { Component, OnInit } from '@angular/core';
import { ListOfWordsService } from "../list-of-words.service";

type dict = { word: string, translation: string }

@Component({
  selector: 'app-the-game',
  templateUrl: './the-game.component.html',
  styleUrls: ['./the-game.component.css']
})
export class TheGameComponent implements OnInit {

  _word: string;
  _translate: string;
  private nxt: number = 0;
  private dictionary: Array<dict> = [];
  constructor(private dict: ListOfWordsService) { }

  nxtWord(s) {
    this.dictionary = this.dict.getData();
    if (this.nxt < this.dictionary.length && s == this.dictionary[this.nxt].translation) this.nxt++;
  }

  ngOnInit() {

  }

  ngDoCheck() { //console.log('ngDoCheck');
    this.dictionary = this.dict.getData();
    if (this.dictionary.length == 0) this._word = '*List empty*';
    else if ((this.nxt) == this.dictionary.length) this._word = '*End*';
    else this._word = this.dictionary[this.nxt].word;
  }

}
