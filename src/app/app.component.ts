import { Component } from '@angular/core';
/* import { TranslateService } from '@ngx-translate/core'; */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Alessandro Bencini';

  /*  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'ita']);
    translate.setDefaultLang('ita');
    translate.use(localStorage.getItem('lang') || 'ita');
  } */
}
