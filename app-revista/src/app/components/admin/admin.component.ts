import { Component, OnInit } from '@angular/core';
import { DialogCreateComponent } from '../dialog-create/dialog-create.component';
import { MatDialog } from '@angular/material/dialog';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  tiles: Tile[] = [
    {text: 'One', cols: 1, rows: 1, color: 'lightblue'},
    
  ];

  constructor(public dialog: MatDialog) { }
  //constructor() { }

  ngOnInit() {
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogCreateComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
