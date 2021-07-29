import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabPageComponent } from './tab-page/tab-page.component';

import { MatTabsModule } from '@angular/material/tabs';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';



import { TaskDefComponent } from './task-def/task-def.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { TaskStepComponent } from './task-def/task-step/task-step.component';
import { StepEltComponent } from './task-def/task-step/step-elt/step-elt.component';
import { TaskStepDilgComponent } from './task-def/task-step/task-step-dilg/task-step-dilg.component';
import { TaskStepConfigComponent } from './task-def/task-step/task-step-config/task-step-config.component';
import { AccessSelectComponent } from './usr-rel/access-select/access-select.component';
import { StepEltDilgComponent } from './task-def/task-step/step-elt/step-elt-dilg/step-elt-dilg.component';
import { OptListConfigComponent } from './misc/opt-list-config/opt-list-config.component';
import { TaskRunnerComponent } from './task-runner/task-runner.component';


@NgModule({
  declarations: [
    AppComponent,
    TabPageComponent,
    TaskDefComponent,
    TaskStepComponent,
    StepEltComponent,
    TaskStepDilgComponent,
    TaskStepConfigComponent,
    AccessSelectComponent,
    StepEltDilgComponent,
    OptListConfigComponent,
    TaskRunnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatStepperModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatGridListModule,
    MatListModule,
    MatChipsModule,
    MatIconModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
