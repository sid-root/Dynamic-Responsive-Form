import { Injectable } from '@angular/core';
import { ElementType, eltTypeDef, taskDef } from './classes/task-defs';
import { taskRun } from './classes/task-run';

@Injectable({
  providedIn: 'root'
})
export class DataServeService {

  public task:taskDef;
  public runningTasks:Array<taskRun> = [];
  public eltTypes:eltTypeDef[] = [];

  

  constructor() { 
    this.task = new taskDef();
    this.eltTypes.push(
      ...[
        new eltTypeDef("Text", ElementType.TEXTFIELD),
        new eltTypeDef("Pick from List", ElementType.DROPDOWN),
        new eltTypeDef("File Upload", ElementType.FILEUPLOAD),
        new eltTypeDef("Date", ElementType.DATEFIELD),
        new eltTypeDef("Submit Button", ElementType.SUBMITBUTTON),
        // new eltTypeDef("Radio Button", ElementType.RADIOBUTTON),
        // new eltTypeDef("Radio Button", ElementType.RADIOBUTTON),

      ]
      );
  }

  public StartNewTask(_id:string){
    let _tmpTaskRun:taskRun = new taskRun();

    _tmpTaskRun._taskDef = this.task.getClone();
    _tmpTaskRun._taskID = _id;
    _tmpTaskRun._currStepIndex = 0;

    this.runningTasks.push(_tmpTaskRun);   

  }
}
