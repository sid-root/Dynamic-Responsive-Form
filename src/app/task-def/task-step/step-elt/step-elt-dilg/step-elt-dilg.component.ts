import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { eltTypeDef, stepElement } from 'src/app/classes/task-defs';
import { DataServeService } from 'src/app/data-serve.service';


@Component({
  selector: 'app-step-elt-dilg',
  templateUrl: './step-elt-dilg.component.html',
  styleUrls: ['./step-elt-dilg.component.css']
})
export class StepEltDilgComponent implements OnInit {

  public stepElementObj:stepElement;

  public _stepNames:string[] = [];

  _eltTypes:eltTypeDef[];
  
  constructor(private _dataServe: DataServeService, public dialogRef: MatDialogRef<StepEltDilgComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any ) { 
      this._eltTypes = this._dataServe.eltTypes;
      this.stepElementObj = data.elementObj;
      this._stepNames = data.stepNames;
    }


  ngOnInit(): void {
  }

}
