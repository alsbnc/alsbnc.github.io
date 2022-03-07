import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  animateMenu() {
    const hamMenu = document.querySelector('#ham-menu');
    const darkBg = document.querySelector('#background-darken');

    const topLine = document.querySelector('#line1');
    const midLine = document.querySelector('#line2');
    const bttmLine = document.querySelector('#line3');

    if (
      hamMenu != null &&
      darkBg != null &&
      topLine != null &&
      midLine != null &&
      bttmLine != null
    ) {
      hamMenu.classList.toggle('accordion');
      darkBg.classList.toggle('show-hide');

      topLine.classList.toggle('tilt1');
      midLine.classList.toggle('hide-line');
      bttmLine.classList.toggle('tilt2');
    }
  }

  constructor() {}

  lang;

  ngOnInit() {
    /* // Set language based on local storage
    this.lang = localStorage.getItem('lang') || 'en';

    // Listen for the html select

    const langSelect = document.querySelector('.lang-select');

    langSelect?.addEventListener('change', (e) => {
      const target = e.target as HTMLSelectElement;
      this.changeLang(target.value);
    }); */
  }

  /* changeLang(lang) {
    localStorage.setItem('lang', lang);
    window.location.reload();
  } */
}
