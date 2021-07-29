import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { taskStep } from 'src/app/classes/task-defs';

@Component({
  selector: 'app-task-step-dilg',
  templateUrl: './task-step-dilg.component.html',
  styleUrls: ['./task-step-dilg.component.css']
})
export class TaskStepDilgComponent implements OnInit {

  public _taskStep:taskStep;

  constructor(public dialogRef: MatDialogRef<TaskStepDilgComponent>,
              @Inject(MAT_DIALOG_DATA) public data:taskStep    
    ) { 
      this._taskStep = data;
    }

  ngOnInit(): void {
  }

  onClose(){
    this.dialogRef.close();
  }
}
