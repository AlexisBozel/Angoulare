import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SecondModuleComponent} from "./second-module/second-module.component";
import {ApicallComponent} from "./apicall/apicall.component";
import {InfosComponent} from "./infos/infos.component";

const routes: Routes = [
  {path: 'api', component: ApicallComponent},
  {path: 'api/stream/:nom', component: InfosComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
