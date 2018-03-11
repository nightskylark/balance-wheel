import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-wheel-chart',
  templateUrl: './wheel-chart.component.html',
  styleUrls: ['./wheel-chart.component.css']
})
export class WheelChartComponent implements OnInit {

  @Input('data') data: object;
  @Input('categories') categories: object;

  wheelData;
  showIcons = true;
  chartElement;
  icons = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.data || changes.categories) {
      this.drawIcons();
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

  onChartInit(e) {
    this.chartElement = e.element;

    // TODO: move to template after devextreme-angular update
    e.component.option({
      "barGroupPadding": 0
    });
  }

  onChartDrawn(e) {
    this.drawIcons();
  }

  drawIcons() {
    if(this.showIcons && this.categories && this.chartElement) {
      this.icons.forEach(icon => icon.remove());

      const ICON_SIZE_RATIO = 0.08;
      const ICON_AREA_RATIO = 1.7;
      const ICON_PADDING_RATIO = 0.25;

      let wheelSize = this.chartElement.querySelector('.dxc-axes-group').getBBox();
      let containerCenter = {
        x: parseFloat(window.getComputedStyle(this.chartElement, null).getPropertyValue("width")) / 2,
        y: parseFloat(window.getComputedStyle(this.chartElement, null).getPropertyValue("height")) / 2
      }

      let maxSize = wheelSize.width > wheelSize.height ? wheelSize.width : wheelSize.height;
      let iconSize = maxSize * ICON_SIZE_RATIO;
      let iconAreaRadius = iconSize * ICON_AREA_RATIO / 2;
      let wheelRadius = maxSize / 2 + iconSize;

      let iconsCount = this.wheelData.length;
      let deltaAngle = 2 * Math.PI / iconsCount;
      let startAngle = - Math.PI / 2 + deltaAngle / 2;

      for(let i = 0; i < iconsCount; i++) { 
        let angle = startAngle + i * deltaAngle;
        let x = wheelRadius * Math.cos(angle) + containerCenter.x - iconAreaRadius;
        let y = wheelRadius * Math.sin(angle) + containerCenter.y - iconAreaRadius;

        let icon = document.createElement('div');
        let category = this.categories[i + 1];

        icon.className = 'dx-icon-' + category.icon + ' chart-icon';
        icon.style.left = x + 'px';
        icon.style.top = y + 'px';
        icon.style.color = category.color;
        icon.style['border-color'] = category.color;
        icon.style['font-size'] = Math.round(iconSize) + 'px';
        icon.style.padding = Math.round(iconSize / 4) + 'px';

        this.chartElement.appendChild(icon);
        this.icons.push(icon);
      }
    }
  }

}
