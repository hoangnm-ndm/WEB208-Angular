import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  authors = [
    { id: '1', name: 'John' },
    { id: '2', name: 'Hoang' },
  ];
}
