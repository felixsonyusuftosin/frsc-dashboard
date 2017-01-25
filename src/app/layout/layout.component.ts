import { Component, OnInit } from '@angular/core';
import { TopbarComponent  } from '../topbar/topbar.component';
import { LeftbarComponent  } from '../leftbar/leftbar.component';
import { BodyComponent  } from '../body/body.component';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
