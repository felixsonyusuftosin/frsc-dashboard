import { Component, OnInit } from '@angular/core';
import { Input, trigger,  state,  style,  transition,  animate} from '@angular/core';
@Component({
  selector: 'app-leftbar',
  templateUrl: './leftbar.component.html',
  styleUrls: ['./leftbar.component.css'],
  animations: [
    trigger('openState', [
      state('inactive', style({
        backgroundColor: '#eee',
        transform: 'scale(1)'
      })),
      state('active',   style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1.1)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
})
export class LeftbarComponent implements OnInit {
  bars: any[];
  constructor() { }

  ngOnInit() {
    this.bars =[
    {
        name: 'Tracked cases', icon: 'fa-th-large', click: 'tracked', onfoc: false, minus : false,
        children: [ {name: 'Emergency Cases', click: '' }, {name: 'Distinct Reports', click: '' },{name: 'Archived Reports', click: '' } ]
    },
    {
        name: 'Analytics', icon: 'fa-area-chart', click: 'analytcs', onfoc: false, minus : false,
        children: [ {name: 'Cases Overview', click: '' }, {name: 'Resolved Cases', click: '' },{name: 'Unresolved Cases', click: '' },
        {name: 'Information', click: '' },{name: 'Cases by location', click: '' },{name: 'Case Resolution tracks', click: '' }
         ]
    },
    {
        name: 'Messages', icon: 'fa-envelope-o', click: 'messages', onfoc: false, minus : false,
        children: [ {name: 'Recent Messages (unread)', click: '' }, {name: 'Archived Messages', click: '' } ]
    },
    {
        name: 'Response Centers', icon: 'fa-map-marker', click: 'none', onfoc: false, minus : false,
        children: []
    },
     {
        name: 'Edit Profile', icon: 'fa-user-circle', click: 'none', onfoc: false, minus : false,
        children: []
    },
    ]; // bars
  };
  openup(item){
   let th = this;
   if (item !== 'none') {
   let red = th.bars.filter(it =>{
       return (it.click === item)
   });
  if (red[0].onfoc){
    red[0].onfoc = false;
    red[0].minus = false;
    return true;
  } else{
  let  newbars = th.bars.map(it =>{
       it.onfoc = false;
       it.minus = false;
       if (it.click === item){
         it.onfoc = true;
         it.minus = true;
       }
       return it;
     })
     th.bars = newbars;
  }
   }
  }

}
