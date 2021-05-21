import { Component, Input, OnInit } from '@angular/core';
import{capsules}from '../modeles/capsule.models';

@Component({
  selector: 'app-capsules',
  templateUrl: './capsules.component.html',
  styleUrls: ['./capsules.component.less']
})
export class CapsulesComponent implements OnInit {
  @Input() list:capsules;
  

  constructor() { }

  ngOnInit(): void {
  }

}
