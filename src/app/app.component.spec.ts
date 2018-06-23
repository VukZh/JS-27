import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

let fixture: ComponentFixture<AppComponent>;

describe('AppComponent', () => {

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [AppComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .createComponent(AppComponent);
    fixture.detectChanges();
  });

  it(`should have as title 'app'`, () => {
    let comp = fixture.componentInstance;
    expect(comp.title).toEqual('app');
 });

  it('should have a Component', () => {
    expect(fixture).toBeTruthy();
  });

  it('should have Text <h1>', () => {
    const h1: HTMLElement = fixture.nativeElement.querySelector('h1');
    const html = h1.innerText;
    expect(html).toBe('Learn English');
  });

  it('should have <mat-tab>', () => {
    const mattab: HTMLElement = fixture.nativeElement.querySelector('mat-tab');
    expect(mattab).toBeTruthy();
  });

});