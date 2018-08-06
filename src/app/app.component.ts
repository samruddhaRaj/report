import { Component } from '@angular/core';

import { headerComponent } from './header/app.headerComponent';
import { navComponent } from './nav/app.navComponent';
import { contentAreaComponent } from './content/app.contentAreaComponent';

@Component({
  selector: 'app-root',
  templateUrl: './main.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
