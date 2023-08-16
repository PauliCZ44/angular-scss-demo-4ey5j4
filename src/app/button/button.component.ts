import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() size?: 'link' | 'large';
  constructor() {}

  ngOnInit() {
    this.setCurrentClasses();
  }

  currentClasses: Record<string, boolean> = {};
  /* . . . */
  setCurrentClasses() {
    console.log('set current class');
    // CSS classes: added/removed per current state of component properties
    this.currentClasses = {
      btn: true,
      'btn--large': this.size === 'large',
      'btn--link': this.size === 'link',
    };
  }
}
