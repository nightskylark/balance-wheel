import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-wheel-chart',
  templateUrl: './wheel-chart.component.html',
  styleUrls: ['./wheel-chart.component.css']
})
export class WheelChartComponent implements OnInit {

  @Input('data') data: object;

  // TODO: Move to db
  names = {
    "1": "Health",
    "2": "Family",
    "3": "Recreation",
    "4": "Workspace",
    "5": "Personal growth",
    "6": "Finance",
    "7": "Romance",
    "8": "Friends",
    "9": "Career"
  };

  circleData;

  // TODO: move to template after devextreme-angular update
  onChartInit = function(e) {
    e.component.option({
      "barGroupPadding": 0
    });
  };
  
  constructor() {
  }

  ngOnInit() {
    var that = this;

    var mapData = function(data) {
      // TODO: Describe types
      data = data.values;
      var result = []
      for(var index in data) {
        result.push({
          arg: that.names[index],
          val: data[index]
        });
      }

      return result;
    };

    that.circleData = mapData(that.data)
  }
}
