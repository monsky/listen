import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-individual',
  templateUrl: './individual.page.html',
  styleUrls: ['./individual.page.scss'],
})
export class IndividualPage implements OnInit {

  constructor(private _location: Location) {

  }

  public ngOnInit() {
  }

  public backClicked() {
    this._location.back();
  }

}
