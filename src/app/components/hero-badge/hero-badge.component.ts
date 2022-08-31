import { Component, Input, OnInit } from '@angular/core';
import { Hero } from 'src/app/model/hero';

@Component({
  selector: 'app-hero-badge',
  templateUrl: './hero-badge.component.html',
  styleUrls: ['./hero-badge.component.css'],
})
export class HeroBadgeComponent implements OnInit {
  @Input() hero!: Hero;

  constructor() {}

  ngOnInit(): void {}
}
