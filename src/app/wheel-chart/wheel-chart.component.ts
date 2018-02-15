import { Component, OnInit, Input } from '@angular/core';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-wheel-chart',
  templateUrl: './wheel-chart.component.html',
  styleUrls: ['./wheel-chart.component.css']
})
export class WheelChartComponent implements OnInit {

  @Input('data') data: object;

  wheelData;
  getCategory;

  // TODO: move to template after devextreme-angular update
  onChartInit = function(e) {
    e.component.option({
      "barGroupPadding": 0
    });
  };

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit() {
    var that = this;

    var mapData = function(data) {
      // TODO: Describe types
      data = data.values;
      var result = []
      for(var index in data) {
        result.push({
          arg: index,
          val: data[index]
        });
      }

      return result;
    };

    this.categoryService.categories.subscribe((categories) => {
      that.wheelData = mapData(that.data);
      that.getCategory = function(argument) {
        return categories[argument.value].name;
      };
    });
  }
}
