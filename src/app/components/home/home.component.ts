import { Component, OnInit } from '@angular/core';
import {ElectronService} from "ngx-electron";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private isElectronApp: Boolean;

  constructor(private electronService: ElectronService) {
    this.isElectronApp = this.electronService.isElectronApp;
  }

  ngOnInit() {
  }

  launchNewWindow() {
    this.electronService.shell.openExternal('https://www.google.fr');
  }

}
