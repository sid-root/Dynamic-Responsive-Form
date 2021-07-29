import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'opt-list-config',
  templateUrl: './opt-list-config.component.html',
  styleUrls: ['./opt-list-config.component.css']
})
export class OptListConfigComponent implements OnInit {

  @Input() selectList:string[];
  currItem:string = "";
  selItem:string;

  constructor() { 
    //this.selectList = ["Option 1","Option 2","Option 3","Option 4","Option 5"]
  }

  ngOnInit(): void {
  }

  AddItem(){
    if(this.currItem != "" && this.selectList.indexOf(this.currItem) < 0){
      this.selectList.push(this.currItem);
      this.selItem = this.currItem;
      //this.currItem = "";
    }
  }

  MoveUp(){

  }

  MoveDown(){

  }

  Remove(){
    
  }

}
