import { taskDef } from './task-defs';

export class taskRun{

    public _taskDef:taskDef;
    public _taskID:string;

    public _isComplete:boolean = false;
    public _currStepIndex:number;
    public _taskData:any;

    constructor(){

    }
    

}