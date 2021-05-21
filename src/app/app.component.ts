import { Component } from '@angular/core';
import{capsules} from './modeles/capsule.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent {
  title = 'drc-space-center';

 capsules:capsules=[{
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
