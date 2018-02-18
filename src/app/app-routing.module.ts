import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WheelListComponent } from './wheel-list/wheel-list.component';
import { CheckpointEditorComponent } from './checkpoint-editor/checkpoint-editor.component';

const routes: Routes = [
  { path: '', component: WheelListComponent },
  { path: 'checkpoint/:id', component: CheckpointEditorComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
