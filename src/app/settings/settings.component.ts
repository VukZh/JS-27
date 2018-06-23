import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  langs = [
    { value: 'English', viewValue: 'English' },
    { value: 'Russian', viewValue: 'Russian' }
  ];

  nums = [
    { value: '5', viewValue: '5' },
    { value: '10', viewValue: '10' },
    { value: '25', viewValue: '25' },
    { value: '50', viewValue: '50' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
