import{NgModule}from'@angular/core';
import{Routes, RouterModule}from'@angular/router';
import { CapsulesComponent } from './capsules/capsules.component';
import { RocketsComponent } from './rockets/rockets.component';


const routes:Routes = [
    {path:'capsules',component:CapsulesComponent},
    {path:'Rockets',component:RocketsComponent}
];

@NgModule({
imports:[RouterModule .forRoot(routes)],
exports:[RouterModule]
})
export class AppRoutingModules{ } 

export const routingcomponent = [CapsulesComponent,RocketsComponent]