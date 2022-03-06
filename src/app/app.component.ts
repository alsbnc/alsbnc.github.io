import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Alessandro Bencini';

  constructor(private translateService: TranslateService) {
    this.translateService.addLangs(['en', 'ita']);
    this.translateService.setDefaultLang('ita');
    this.translateService.use(localStorage.getItem('lang') || 'ita');
  }
}
