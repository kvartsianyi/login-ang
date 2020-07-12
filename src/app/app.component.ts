import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'login-ang';

  constructor(private translate: TranslateService) {
    const language = localStorage.getItem('language');

    translate.addLangs(['en', 'uk']);
    translate.setDefaultLang(language || 'en');
  }
}
