import { Component } from '@angular/core';
import { TitleService } from './services/routing/title.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  [x: string]: any;
  constructor(private titleService: TitleService) {
    this.titleService.refreshTitle();




}

}
