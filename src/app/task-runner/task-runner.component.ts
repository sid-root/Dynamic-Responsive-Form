import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-task-runner',
  templateUrl: './task-runner.component.html',
  styleUrls: ['./task-runner.component.css']
})
export class TaskRunnerComponent implements OnInit {

  taskIDStr:string = 'INV-0000001, Raymonds';
  constructor(public dialogRef: MatDialogRef<TaskRunnerComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any ) { 

    }

  ngOnInit(): void {
  }

  StartTask(){
    this.dialogRef.close(
      { 
        id:this.taskIDStr, 
        result:true 
      });
  }

}
