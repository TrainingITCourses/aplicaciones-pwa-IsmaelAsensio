import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Launch } from '../store/models/launch';
import { Mission } from '../store/models/mission';

@Component({
  selector: 'app-launches-display',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './launches-display.html',
  styleUrls: ['./launches-display.css']
})

export class DisplayComponent implements OnInit {

  @Input() public launches: Launch[] = [];
  public missions: Mission[];

  constructor() {}

  ngOnInit() {
  }

  tieneAgencia(launch: Launch) {
    if (launch.lsp) {
      return true;
    } else {
      return false;
    }
  }

  tieneMisiones(launch: Launch) {
    this.missions = [];

    if (launch.missions.length > 0) {
      this.missions = launch.missions;
      return this.missions;
    } else {
      return false;
    }
  }

}
