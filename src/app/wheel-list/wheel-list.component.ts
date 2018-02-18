import { Component, OnInit, Input } from '@angular/core';
import { CheckpointService } from '../checkpoint.service';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-wheel-list',
  templateUrl: './wheel-list.component.html',
  styleUrls: ['./wheel-list.component.css']
})
export class WheelListComponent implements OnInit {
  
  checkpoints;
  categories;

  constructor(private checkpointService: CheckpointService, private categoryService: CategoryService) {

    this.checkpoints = this.checkpointService.checkpoints;
    this.categories = this.categoryService.categories;

  }

  ngOnInit() {
  }

}
