import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { WheelListComponent } from './wheel-list/wheel-list.component';
import { WheelChartComponent } from './wheel-chart/wheel-chart.component';

import { DxPolarChartModule, DxRadioGroupModule, DxButtonModule } from 'devextreme-angular';
import { CategoryService } from './category.service';
import { CheckpointService } from './checkpoint.service';
import { AppRoutingModule } from './/app-routing.module';
import { CheckpointEditorComponent } from './checkpoint-editor/checkpoint-editor.component'

@NgModule({
  declarations: [
    AppComponent,
    WheelListComponent,
    WheelChartComponent,
    CheckpointEditorComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    DxPolarChartModule,
    DxRadioGroupModule,
    DxButtonModule,
    AppRoutingModule,
  ],
  providers: [
    CategoryService,
    CheckpointService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
