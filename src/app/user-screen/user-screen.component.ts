import { Component, OnInit, inject, Inject } from '@angular/core';
import { DataService } from '../service/data.service';
import { User } from '../model/user.model';
import { AgGridAngular } from 'ag-grid-angular';
import type { ColDef } from 'ag-grid-community';
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { GridOptions } from 'ag-grid-community';
import { MAT_DIALOG_DATA, MatDialog, MatDialogContent, MatDialogTitle, MatDialogModule } from '@angular/material/dialog';
ModuleRegistry.registerModules([AllCommunityModule]);

@Component({
  selector: 'app-user-screen',
  standalone: true,
  imports: [AgGridAngular,MatSlideToggleModule,MatIconModule,MatButtonModule,FormsModule,MatInputModule, MatFormFieldModule],
  templateUrl: './user-screen.component.html',
  styleUrl: './user-screen.component.css'
})
export class UserScreenComponent implements OnInit {

  students: User[] = [];
  rowData:any;
  value = '';

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.students = this.dataService.getUsers();
    this.rowData = this.students.map(student => ({
    name: student.name,
    phone: student.phone,
    id: student.id,
    lessonNumber: student.lessonNumber,
    price: student.price,
    isPaid: student.isPaid,
    details: null
  }));
  }

  onValueChange(event:any){
    this.rowData = this.students.filter(s => s.name.includes(event));
  }

  onToggleChange(event:any){
    if (event.checked === true) {
      this.rowData = this.students.filter(s => s.isPaid === false);
    }
    else{
      this.rowData = this.students;
    }
  }

  gridOptions: GridOptions = {
    context: { componentParent: this },
    getRowStyle: (params) => {
      if (params.data.isPaid != true) {
          return { color: '#c99940' };
      }
      return { color: 'black' };
  },
  };

  dialog = inject(MatDialog);

  openDialog(user: User) {
    this.dialog.open(DialogDataExampleDialog, {
      data: {
        user: user
      },
    });
  }
  
  colDefs: ColDef[] = [
    { field: "name", headerName: "שם" }, 
    { field: "phone", headerName: "טלפון" }, 
    { field: "id", headerName: "מספר זהות" }, 
    { field: "lessonNumber", headerName: "שיעור" },
    { field: "price", headerName: "מחיר" }, 
    { field: "isPaid", headerName: "האם שולם" },
    {
      field: "details",
      headerName: "פרטים",
      cellRenderer: (params: { data: User; }) => {
        const button = document.createElement('button');
        button.innerText = 'פרטים';
        button.className = 'btn btn-primary';
        button.addEventListener('click', () => this.openDialog(params.data));
        button.className = 'detailsBtn';
        return button;
      }
    }
  ];
}

@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: 'dialog-data-example-dialog.html',
  styleUrl: './user-screen.component.css',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent],
})
export class DialogDataExampleDialog{
  user:any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: { user: User }) {
    this.user = data.user;
  }
}
