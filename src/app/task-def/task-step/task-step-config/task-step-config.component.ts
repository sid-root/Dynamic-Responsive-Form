import { Component, Input, OnInit } from '@angular/core';
import { taskStep } from 'src/app/classes/task-defs';

@Component({
  selector: 'task-step-config',
  templateUrl: './task-step-config.component.html',
  styleUrls: ['./task-step-config.component.css']
})
export class TaskStepConfigComponent implements OnInit {

  @Input() taskStepObj:taskStep;

  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
