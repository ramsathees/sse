import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss']
})
export class BoxComponent implements OnInit {
 @Output() public remove = new EventEmitter();
 @Input() public layoutPosition;
  constructor() { }

  ngOnInit() {
  }
  hideBox(buttonVal) {
    this.remove.emit(buttonVal);
  }
}
