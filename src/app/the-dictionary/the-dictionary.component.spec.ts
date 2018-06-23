import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TheDictionaryComponent } from './the-dictionary.component';
import { ListOfWordsService } from "../list-of-words.service";
import { FetchTranslationService } from "../fetch-translation.service";
import { NO_ERRORS_SCHEMA } from '@angular/core';

let fixture: ComponentFixture<TheDictionaryComponent>;
let service1: ListOfWordsService;
let service2: FetchTranslationService;

describe('TheDictionaryComponent', () => {

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [TheDictionaryComponent],
      providers: [ListOfWordsService],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .createComponent(TheDictionaryComponent);
    fixture.detectChanges();
  });

  it('should have a Component', () => {
    expect(fixture).toBeTruthy();
  });

  it('should have Add new <button>', () => {
    const button: HTMLElement = fixture.nativeElement.querySelector('button');
    const html = button.innerText;
    expect(html).toBe('Add new');
  });

  it('can instantiate service ListOfWordsService', () => {
    service1 = TestBed.get(ListOfWordsService);
    expect(service1 instanceof ListOfWordsService).toBe(true);
  });

  it('can instantiate service FetchTranslationService', () => {
    service2 = TestBed.get(FetchTranslationService);
    expect(service2 instanceof FetchTranslationService).toBe(true);
  }); 

  // it('should have values', () => {
  //   let settingscomponent = new SettingsComponent();
  //   expect(settingscomponent.langs[0].value).toEqual("English");
  //   expect(settingscomponent.nums[2].value).toEqual('25');
  // });

});