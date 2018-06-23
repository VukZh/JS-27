import { FetchTranslationService } from './fetch-translation.service';

describe('FetchTranslationService', () => {
  let service: FetchTranslationService;
  beforeEach(() => { service = new FetchTranslationService(); });
 
  it('#getPromiseValue should return value from a promise 1',
    (done: DoneFn) => {
    service.getTranslate('who').then(value => {
      expect(value.text[0]).toBe('кто');
      // console.log(value.text[0])
      done();
    });
  });

  it('#getPromiseValue should return value from a promise 2',
  (done: DoneFn) => {
  service.getTranslate('what').then(value => {
    expect(value.text[0]).toBe('что');
    // console.log(value.text[0])
    done();
  });
  });

  it('#getPromiseValue should return value from a promise 3',
  (done: DoneFn) => {
  service.getTranslate('remote webinar').then(value => {
    expect(value.text[0]).toBe('дистанционный вебинар');
    // console.log(value.text[0])
    done();
  });
  });

});