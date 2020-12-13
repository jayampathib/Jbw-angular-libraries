import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JbwSampleLibraryModule } from 'projects/jbw-sample-library/src/lib/jbw-sample-library.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    JbwSampleLibraryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
