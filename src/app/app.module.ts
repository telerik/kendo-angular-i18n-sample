import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http, HttpModule, ConnectionBackend, BaseRequestOptions,
         Response, ResponseOptions, ResponseType } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { GridModule } from '@progress/kendo-angular-grid';
import { UploadModule } from '@progress/kendo-angular-upload';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    GridModule,
    HttpModule,
    UploadModule
  ],
  providers: [BaseRequestOptions, MockBackend, {
    provide: Http,
    deps: [MockBackend, BaseRequestOptions],
    useClass: Http
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
