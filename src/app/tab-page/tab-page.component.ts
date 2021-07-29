import { Component, OnInit } from '@angular/core';
import { taskRun } from '../classes/task-run';
import { DataServeService } from '../data-serve.service';

@Component({
  selector: 'app-tab-page',
  templateUrl: './tab-page.component.html',
  styleUrls: ['./tab-page.component.css']
})
export class TabPageComponent implements OnInit {

  constructor(public _dataServe: DataServeService) { }

  ngOnInit(): void {
  }

  getRunningTasksLabel():string{
    let totalTasks:number = this._dataServe.runningTasks.length;
    let activeTasks:number = 0;

    this._dataServe.runningTasks.forEach((_tmpTask:taskRun) => {

      if(_tmpTask._isComplete == false){
        activeTasks++;
      }

    });

    return  "";
  }

}
