import { Component, Input } from '@angular/core';
import { Hero } from 'src/app/domain/model/Hero';

@Component({
  selector: 'app-hero-badge',
  templateUrl: './hero-badge.component.html',
  styleUrls: ['./hero-badge.component.css'],
})
export class HeroBadgeComponent {
  @Input() hero!: Hero;
}
