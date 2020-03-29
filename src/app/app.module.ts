import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MasterService } from './master.service';
import { MasterTaskComponent } from './master-task/master-task.component';


@NgModule({
  declarations: [
    AppComponent, MasterTaskComponent
  ],
  entryComponents:[],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,FormsModule,ReactiveFormsModule,FlexLayoutModule
  ],
  providers: [MasterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
