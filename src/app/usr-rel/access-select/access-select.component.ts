import { SelectionModel } from '@angular/cdk/collections';
import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'access-select',
  templateUrl: './access-select.component.html',
  styleUrls: ['./access-select.component.css']
})
export class AccessSelectComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['sno', 'username', 'userid', 'readonly','readwrite'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  @Input() readonlyUsers:string[];
  @Input() readwriteUsers:string[];

  
  selection = new SelectionModel<UserData>(true, []);
  
  constructor() {
    
    
  }

  ngOnInit(): void {
    const users = [
      {
        sno: "1",
        username: "Manager",
        userid: "manager@gmail.com",
        readonly: false,
        readwrite: false
      },
      {
        sno: "2",
        username: "Asst Manager",
        userid: "asstmanager@gmail.com",
        readonly: false,
        readwrite: false
      },
      {
        sno: "3",
        username: "supplier",
        userid: "supplier@gmail.com",
        readonly: false,
        readwrite: false
      }
    ];

    users.forEach((_user:UserData) => {

      for(var i = 0;i < this.readonlyUsers.length;i++){
        if(this.readonlyUsers[i] == _user.userid){
          _user.readonly = true;
        }
      }
      
      for(var i = 0;i < this.readwriteUsers.length;i++){
        if(this.readwriteUsers[i] == _user.userid){
          _user.readwrite = true;
        }
      }

    });
    

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

   ngAfterViewInit() {

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected == numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  toggleReadOnlyUser(usrRow:UserData){
    if(usrRow.readonly == true){
      usrRow.readonly = false;
      let _index = this.readonlyUsers.indexOf(usrRow.userid);
      if(_index > -1){
        this.readonlyUsers.splice(_index,1);
      }
    }
    else{
      let _index = this.readwriteUsers.indexOf(usrRow.userid);
      if(_index > -1){
        this.readwriteUsers.splice(_index,1);
      }
      usrRow.readwrite = false;

      _index = this.readonlyUsers.indexOf(usrRow.userid);
      if(_index < 0){
        this.readonlyUsers.push(usrRow.userid);
      }
      usrRow.readonly = true;
    }

  }

  toggleReadWriteUser(usrRow:UserData){
    if(usrRow.readwrite == true){
      usrRow.readwrite = false;
      let _index = this.readwriteUsers.indexOf(usrRow.userid);
      if(_index > -1){
        this.readwriteUsers.splice(_index,1);
      }
    }
    else{
      let _index = this.readonlyUsers.indexOf(usrRow.userid);
      if(_index > -1){
        this.readonlyUsers.splice(_index,1);
      }
      usrRow.readonly = false;
      
      _index = this.readwriteUsers.indexOf(usrRow.userid);
      if(_index < 0){
        this.readwriteUsers.push(usrRow.userid);
      }
      usrRow.readwrite = true;
    }

  }


}

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
      NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

  return {
    sno: id.toString(),
    username: name,
    userid:name,
    readonly: Math.round(Math.random() * 100) > 50,
    readwrite: Math.round(Math.random() * 100) > 50
  };
}


export class UserData {
  sno: string;
  username: string;
  userid: string;
  readonly: boolean;
  readwrite:boolean;

}

const NAMES: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];