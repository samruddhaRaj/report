import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { headerComponent } from './header/app.headerComponent';
import { navComponent } from './nav/app.navComponent';
import { contentAreaComponent } from './content/app.contentAreaComponent';
import { footerComponent } from './footer/app.footerComponent';
import { aboutComponent } from './about/app.aboutComponent';
import { contactComponent } from './contact/app.contactComponent';
import { categoryComponent } from './categories/app.categoryComponent';
import { veternaryHealthComponent } from './veternaryHealth/app.veternaryHealthComponent';


@NgModule({
  declarations: [
    AppComponent,
    headerComponent,
    navComponent,
    contentAreaComponent,
    footerComponent,
    aboutComponent,
    contactComponent,
    categoryComponent,
    veternaryHealthComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
          {
            path:'about',
            component:aboutComponent
          },
          {
            path:'',
            component:contentAreaComponent
          },
          {
            path:'contact',
            component:contactComponent
          },
          {
            path:'category',
            component:categoryComponent
          }
          ,
          {
            path:'veternary',
            component:veternaryHealthComponent
          }
      ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
