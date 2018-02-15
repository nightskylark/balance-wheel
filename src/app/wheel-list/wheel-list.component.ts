import { Component, OnInit, Input } from '@angular/core';
import { CheckpointService } from '../checkpoint.service';

@Component({
  selector: 'app-wheel-list',
  templateUrl: './wheel-list.component.html',
  styleUrls: ['./wheel-list.component.css']
})
export class WheelListComponent implements OnInit {
  
  checkpoints;

  constructor(private checkpointService: CheckpointService) {

    this.checkpoints = this.checkpointService.checkpoints;

  }

  ngOnInit() {
  }

}
