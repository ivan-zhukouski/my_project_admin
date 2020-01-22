import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogLogoutComponent } from './logout-dialog/dialogLogout.component';
import { ApiService } from '@core/services';
import { Employee } from '@core/models/employee.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [ApiService]
})
export class HeaderComponent implements OnInit {
  user: Employee;
  @Output() onChanged = new EventEmitter();
  toggler(toggle: any) {
    this.onChanged.emit(toggle);
  }

  constructor(public dialog: MatDialog,
              public apiService: ApiService) { }

  openDialog() {
    const dialogRef = this.dialog.open(DialogLogoutComponent, {
      width: '250px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit() {
    this.apiService.getUser().subscribe((data: Employee) => this.user = data);
  }
}
