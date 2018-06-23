import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class FetchTranslationService {
  constructor() {
  }
  getTranslate(searchStr: string) {
    var url = "https://translate.yandex.net/api/v1.5/tr.json/translate";
    var keyAPI = "trnsl.1.1.20180529T114523Z.e89c1702959fc9c8.a350daa2cf3635c46ec0d37411ccbe9eb3b5ffdd";
    var textAPI = searchStr;
    var langAPI = "ru";
    var data = "?key=" + keyAPI + "&text=" + textAPI + "&lang=" + langAPI;
    var xhr = url + data;
    return fetch(xhr).then(res => res.json());
  }
}
