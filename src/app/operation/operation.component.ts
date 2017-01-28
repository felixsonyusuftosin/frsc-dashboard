import { Component, OnInit } from '@angular/core';
import {MapObjectService} from '../map-object.service'; 
import * as Leaflet from 'leaflet';

declare let L: any;
@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.css']
})
export class OperationComponent implements OnInit {
geoj:any;
map:any;
layer:string;
  constructor( private mapclass: MapObjectService ) {
    this.layer = 'sat'
   }

  ngOnInit() {

  };
switchbase(){
  if (this.layer == 'sat'){
       this.layer = 'road';
    this.mapclass.switchbase('sat')
 
  }else{
    this.layer = 'sat';
    this.mapclass.switchbase('road');
  
  }
}
ngAfterContentInit (){
      this.mapclass.initialize().then((mapin) => {
      this.map = mapin;
      this.mapclass.initializeinset().then((map) => {
      this.mapclass.invalidateinset(map);
        this.mapclass.insetmap();
        //this.ld.convertdata(this.ld.alllist);
      });
      });
};
}
