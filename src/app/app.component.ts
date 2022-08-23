import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Tour of Heroes';
  navMenuItems = [
    { url: '/dashboard', text: 'Dashboard' },
    { url: '/heroes', text: 'Heroes' },
  ];
}
