import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title = 'Tour of Heroes';
  navMenuItems = [
    { url: '/dashboard', text: 'Dashboard' },
    { url: '/heroes', text: 'Heroes' },
  ];
  isMenuActive = false;

  constructor() {}

  ngOnInit(): void {}
}
