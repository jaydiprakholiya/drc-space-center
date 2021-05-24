import{NgModule}from'@angular/core';
import{Routes, RouterModule}from'@angular/router';
import { BlogComponent } from './blog/blog.component';
import { CapsulesComponent } from './capsules/capsules.component';
import { MissionComponent } from './mission/mission.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RocketsComponent } from './rockets/rockets.component';


const routes:Routes = [
    {path:'Capsules',component:CapsulesComponent},
    {path:'Rockets',component:RocketsComponent},
    {path:'Mission',component:MissionComponent},
    {path:'Blog',component:BlogComponent},
    {path:"**",component:NotFoundComponent}
];

@NgModule({
imports:[RouterModule .forRoot(routes)],
exports:[RouterModule]
})
export class AppRoutingModules{ } 

export const routingcomponent = [CapsulesComponent,RocketsComponent,BlogComponent,MissionComponent]