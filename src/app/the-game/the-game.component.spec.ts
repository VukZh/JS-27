import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TheGameComponent } from './the-game.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { ListOfWordsService } from "../list-of-words.service";

let fixture: ComponentFixture<TheGameComponent>;

type dict = { word: string, translation: string}

describe('TheGameComponent', () => {

  let service: ListOfWordsService;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [TheGameComponent],
      providers: [ListOfWordsService],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .createComponent(TheGameComponent);
    fixture.detectChanges();
  });

  it('should have a Component', () => {
    expect(fixture).toBeTruthy();
  });

  it('should have <h2>', () => {
    const h2: HTMLElement = fixture.nativeElement.querySelector('h2');
    expect(h2).toBeTruthy();
  });

  it('should have Text <h2>', () => {
    const h2: HTMLElement = fixture.nativeElement.querySelector('h2');
    const html = h2.innerText;
    expect(html).toBe('*List empty*');
  });

  it('can instantiate service ListOfWordsService', () => {
    service = TestBed.get(ListOfWordsService);
    expect(service instanceof ListOfWordsService).toBe(true);
  }); 

});
