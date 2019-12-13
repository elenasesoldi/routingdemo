import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'routingdemo';

  public activeClass(event: MouseEvent): void {
    const nav = document.getElementById('navigation');
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < nav.children.length; i++) {
      const n = nav.children[i] as HTMLElement;
      n.classList.remove('active');
    }
    const a = event.target as HTMLElement;
    a.classList.add('active');
  }
}
