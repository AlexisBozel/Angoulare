import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SecondModuleComponent} from "./second-module/second-module.component";
import {ApicallComponent} from "./apicall/apicall.component";

const routes: Routes = [
  {path: 'api', component: ApicallComponent},
  // {path: 'donnes', component: SecondModuleComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
