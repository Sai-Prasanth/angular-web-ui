import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-commonproductdisplay',
  templateUrl: './commonproductdisplay.component.html',
  styleUrls: ['./commonproductdisplay.component.scss']
})
export class CommonproductdisplayComponent implements OnInit {
  @Input() productDetails: any;
  constructor() { }

  ngOnInit(): void {
  }

}
