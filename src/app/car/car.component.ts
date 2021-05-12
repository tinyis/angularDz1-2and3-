import { Component, OnInit } from '@angular/core';
import{Car} from './car';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

mers:Car={

  car:"/assets/images/car.jpg",
  logo:"/assets/images/logo.jpg",
  founder:"/assets/images/founder.jpg"
}

  constructor() { }

  ngOnInit(): void {
  }

}
