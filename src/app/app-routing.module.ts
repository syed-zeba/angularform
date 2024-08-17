import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { ProtocolComponent } from './protocol/protocol.component';
import { LayerComponent } from './layer/layer.component';
import { AlgoComponent } from './algo/algo.component';

const routes: Routes = [
  {path:'courses',component:CoursesComponent},
  {path:'protocol',component:ProtocolComponent},
  {path:'layer',component:LayerComponent},
  {path:'algo',component:AlgoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
