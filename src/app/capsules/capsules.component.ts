import { Component, Input, OnInit } from '@angular/core';
import{capsules}from '../modeles/capsule.models';

@Component({
  selector: 'app-capsules',
  templateUrl: './capsules.component.html',
  styleUrls: ['./capsules.component.less']
})
export class CapsulesComponent implements OnInit {
  @Input() list:capsules;

  private _id:string;
  @Input()
  set id(id:string){
    console.log("id changed");
    this._id=id;
  }
  get id():string{
    return this._id;
  }
  constructor() { 
    this.list =[{
      name:'c1',
      date:new Date,
      note:'NA'
    },
    {
     name:'c2',
     date:new Date,
     note:'NA'
   },
   {
     name:'c3',
     date:new Date,
     note:'NA'
   },
   {
     name:'c4',
     date:new Date,
     note:'NA'
   }]  
  }
  ngOnInit(): void {
  }

}
