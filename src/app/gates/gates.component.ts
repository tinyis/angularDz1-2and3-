import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gates',
  templateUrl: './gates.component.html',
  styleUrls: ['./gates.component.css']
})
export class GatesComponent implements OnInit {

  quote:string="Patience is a key element of success";

  constructor() { }

  ngOnInit(): void {
  }

}
