import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { taskDef, taskStep } from '../classes/task-defs';
import { DataServeService } from '../data-serve.service';
import { TaskRunnerComponent } from '../task-runner/task-runner.component';
import { TaskStepDilgComponent } from './task-step/task-step-dilg/task-step-dilg.component';

@Component({
  selector: 'app-task-def',
  templateUrl: './task-def.component.html',
  styleUrls: ['./task-def.component.css']
})
export class TaskDefComponent implements OnInit {

  _task:taskDef;
  isFileUpload:boolean = false;
  fileToUpload: File = null;

  //firstFormGroup: FormGroup;
  //secondFormGroup: FormGroup;


  constructor(private _dataServe: DataServeService, public dialog: MatDialog) { 
    this._task = _dataServe.task;
    console.log('Hey what '+this._task);
  }

  ngOnInit(): void {
    // this.firstFormGroup = this._formBuilder.group({
    //   firstCtrl: ['', Validators.required]
    // });
    // this.secondFormGroup = this._formBuilder.group({
    //   secondCtrl: ['', Validators.required]
    // });

  }

  AddStep():void{

    let _newStep:taskStep = new taskStep("New Step");
    let _currTask:taskDef = this._task;

    const dialogRef = this.dialog.open(TaskStepDilgComponent, {
      height: '70%',
      width: '100%',
      data: _newStep
    });

    

    dialogRef.afterClosed().subscribe(result => {
      console.log(_newStep);
      _currTask.addStep(_newStep);

    });

  }

  stepEditSelected(_tmpStep:taskStep){
    let _editStep:taskStep = _tmpStep

    const dialogRef = this.dialog.open(TaskStepDilgComponent, {
      height: '70%',
      width: '100%',
      data: _editStep
    });

    

    dialogRef.afterClosed().subscribe(result => {
      console.log("edit step done");
    });
  }

  DownloadJson(){
    this.isFileUpload = false;
    var sJson = JSON.stringify(this._task.getJson());
    var element = document.createElement('a');
    element.setAttribute('href', "data:text/json;charset=UTF-8," + encodeURIComponent(sJson));
    element.setAttribute('download', "task-def.json");
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click(); // simulate click
    document.body.removeChild(element);
  }

  UploadJson(){
    this.isFileUpload = true;
  }

  StartTask(){
    this.isFileUpload = false;

    this._dataServe.task = this._task;

    const dialogRef = this.dialog.open(TaskRunnerComponent, {
      height: '200px',
      width: '350px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(retResult => {
      if(retResult.result == true){
        console.log('start the task'+retResult.id);

      }
    });
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    
    let read = new FileReader();

    read.readAsBinaryString(this.fileToUpload);

    read.onloadend = () => {
        let jsonString:any = read.result;
        let _json = JSON.parse(jsonString);

        console.log(_json);

        this._task = taskDef.getObj(_json);


    }
  }


}
