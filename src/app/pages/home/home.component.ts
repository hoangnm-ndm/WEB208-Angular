import { Component } from '@angular/core';
import { Nyc } from 'src/app/common/nyc';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  user = {
    id: '1',
    name: 'John Doe',
    age: 32,
    address: 'VN',
  };
  danhSachNYC: Nyc[] = [
    { id: '1', name: 'Quynh' },
    { id: '2', name: 'Nguyen' },
    { id: '3', name: 'Ha' },
    { id: '4', name: 'Thuy' },
    { id: '5', name: 'Nga' },
    { id: '6', name: 'Hiep' },
  ];
}
