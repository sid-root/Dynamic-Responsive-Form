import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataServeService } from 'src/app/data-serve.service';
import { eltTypeDef, stepElement, taskDef, taskStep } from '../../classes/task-defs';
import { StepEltDilgComponent } from './step-elt/step-elt-dilg/step-elt-dilg.component';

import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {ThemePalette} from '@angular/material/core';


@Component({
  selector: 'app-task-step',
  templateUrl: './task-step.component.html',
  styleUrls: ['./task-step.component.css']
})
export class TaskStepComponent implements OnInit {

  @Input() task_step:taskStep;
  @Input() parentTaskDef:taskDef;

  removable:boolean = true;


  _eltTypes:eltTypeDef[];

  constructor(private _dataServe: DataServeService, public dialog: MatDialog) { 
    this._eltTypes = this._dataServe.eltTypes;
  }

  ngOnInit(): void {
  }

  AddField():void{
    //this.task_step.addElement("");

    let _newElement:stepElement = new stepElement("New Field");
    let _currTaskStep:taskStep = this.task_step;

    const dialogRef = this.dialog.open(StepEltDilgComponent, {
      height: '70%',
      width: '100%',
      data: { 
        elementObj : _newElement,
        stepNames : this.parentTaskDef.getStepNames()
      }
    });

    

    dialogRef.afterClosed().subscribe(result => {
      console.log(_newElement);
      _currTaskStep.addElement(_newElement);

    });
  }

  removeElement(_index:number){
    this.task_step.elements.splice(_index,1);
  }

  drop(event: CdkDragDrop<stepElement[]>) {
    moveItemInArray(this.task_step.elements, event.previousIndex, event.currentIndex);
  }

  elementSelected(_tmpEltObj:stepElement){
    let _editElement:stepElement = _tmpEltObj;

    const dialogRef = this.dialog.open(StepEltDilgComponent, {
      height: '70%',
      width: '100%',
      data: { 
        elementObj : _editElement,
        stepNames : this.parentTaskDef.getStepNames()
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('edit done')
      //_currTaskStep.addElement(_newElement);
    });
  }
  
}
