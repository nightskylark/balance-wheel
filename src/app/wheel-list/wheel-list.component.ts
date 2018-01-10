import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-wheel-list',
  templateUrl: './wheel-list.component.html',
  styleUrls: ['./wheel-list.component.css']
})
export class WheelListComponent implements OnInit {

  @Input('data') wheelData: Array<any>;

  constructor() { }

  ngOnInit() {
  }

}
