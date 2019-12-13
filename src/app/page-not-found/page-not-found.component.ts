import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const nav = document.getElementById('navigation');
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < nav.children.length; i++) {
      const n = nav.children[i] as HTMLElement;
      n.classList.remove('active');
    }
  }

}
