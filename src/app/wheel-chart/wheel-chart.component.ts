import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-wheel-chart',
  templateUrl: './wheel-chart.component.html',
  styleUrls: ['./wheel-chart.component.css']
})
export class WheelChartComponent implements OnInit {

  @Input('data') data: object;
  @Input('categories') categories: object;

  wheelData;

  constructor() { }

  ngOnChanges() {
    var that = this;
    if(that.categories) {
      that.getCategory = function(argument) {
        return that.categories[argument.value].name;
      };
    }
  }

  ngOnInit() {
    // TODO: pipe
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
    this.wheelData = mapData(this.data);
  }

  getCategory(argument: any) :any {
    return "";
  }

  // TODO: move to template after devextreme-angular update
  onChartInit = function(e) {
    e.component.option({
      "barGroupPadding": 0
    });
  };

}
