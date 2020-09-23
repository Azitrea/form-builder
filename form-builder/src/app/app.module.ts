import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicFormBuilderModule } from './dynamic-form-builder/dynamic-form-builder.module';
import { FormGroupHandlerModule } from './form-group-handler/form-group-handler.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormGroupHandlerModule,
    DynamicFormBuilderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
