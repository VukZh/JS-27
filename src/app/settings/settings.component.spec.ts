import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SettingsComponent } from './settings.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

let fixture: ComponentFixture<SettingsComponent>;

describe('SettingsComponent', () => {

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [SettingsComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .createComponent(SettingsComponent);
    fixture.detectChanges();
  });

  it('should have a Component', () => {
    expect(fixture).toBeTruthy();
  });

  it('should have Back <button>', () => {
    const button: HTMLElement = fixture.nativeElement.querySelector('button');
    const html = button.innerText;
    expect(html).toBe('Back');
  });

  it('should have <mat-form-field>', () => {
    const matformfield: HTMLElement = fixture.nativeElement.querySelector('mat-form-field');
    expect(matformfield).toBeTruthy();
  });

  it('should have values', () => {
    let settingscomponent = new SettingsComponent();
    expect(settingscomponent.langs[0].value).toEqual("English");
    expect(settingscomponent.nums[2].value).toEqual('25');
  });

});