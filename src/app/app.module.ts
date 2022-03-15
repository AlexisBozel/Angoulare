import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SecondModuleComponent } from './second-module/second-module.component';
import { ApicallComponent } from './apicall/apicall.component';
import { InfosComponent } from './infos/infos.component';
import { SafePipeComponent } from './safe-pipe/safe-pipe.component';


@NgModule({
  declarations: [
    AppComponent,
    SecondModuleComponent,
    ApicallComponent,
    InfosComponent,
    SafePipeComponent,
    SafePipeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
