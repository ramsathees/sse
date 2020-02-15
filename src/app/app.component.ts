import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'assignment';
  public layoutPosition;
  public visibleLayouts = {
    layout1: true,
    layout2: true,
    layout3: true,
    layout4: true,
  };
  removeLayout(event) {
    this.layoutPosition = event;
    switch (event) {
      case '1':
      this.visibleLayouts.layout1 = !this.visibleLayouts.layout1;
      break;
      case '2':
      this.visibleLayouts.layout2 = !this.visibleLayouts.layout2;
      break;
      case '3':
      this.visibleLayouts.layout3 = !this.visibleLayouts.layout3;
      break;
      case '4':
      this.visibleLayouts.layout4 = !this.visibleLayouts.layout4;
      break;
     default:
       this.visibleLayouts = this.visibleLayouts;
    }
  }
}
