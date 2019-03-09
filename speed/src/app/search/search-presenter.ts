import { Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-search-presenter',
  templateUrl: './search.html',
  styleUrls: ['./search.css']
})

export class SearchComponent implements OnInit {

  @Output() public eventSearchAgencies = new EventEmitter();
  @Output() public eventSearchStatus = new EventEmitter();
  @Output() public eventSearchMissions = new EventEmitter();
  @Output() public eventSaveLaunches = new EventEmitter();

  constructor() {}

  ngOnInit() {
  }

  onKeyAgencies(event: any) {
    const textToSearch = event.target.value;
    this.eventSearchAgencies.next(textToSearch);
  }

  onKeyStatus(event: any) {
    const textToSearch = event.target.value;
    this.eventSearchStatus.next(textToSearch);
  }

  onKeyMissions(event: any) {
    const textToSearch = event.target.value;
    this.eventSearchMissions.next(textToSearch);
  }

  onSaveLaunches(event: any) {
    this.eventSaveLaunches.next();
  }
}
