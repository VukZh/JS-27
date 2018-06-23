import { Component, OnInit } from '@angular/core';
import { FetchTranslationService } from "../fetch-translation.service";
import { ListOfWordsService } from "../list-of-words.service";

type dict = { word: string, translation: string }

@Component({
  selector: 'app-the-dictionary',
  templateUrl: './the-dictionary.component.html',
  styleUrls: ['./the-dictionary.component.css']
})

export class TheDictionaryComponent implements OnInit {
  dictionary: Array<dict>

  constructor(private fetch: FetchTranslationService, private dict: ListOfWordsService) { }

  translateWord(searchStr: string) {
    class Translate {
      word: string;
      translation: string;
    }
    let temp: Translate = new Translate();
    this.fetch.getTranslate(searchStr).then((r) => {
      temp.translation = searchStr; temp.word = r.text[0];
      if (temp.translation != temp.word) {
        console.log(temp.translation, '->', temp.word)
        this.dict.addData(temp)
      }
    })
  }

  outDict() {
    this.dict.getData();
  }

  ngOnInit() {
    this.dictionary = this.dict.getData()
  }

}
