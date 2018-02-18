import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-checkpoint-editor',
  templateUrl: './checkpoint-editor.component.html',
  styleUrls: ['./checkpoint-editor.component.css']
})
export class CheckpointEditorComponent implements OnInit {

  categories;

  constructor(private categoryService: CategoryService) {
    this.categories = this.categoryService.categories;
  }

  ngOnInit() {
  }

}
