import { Component, OnInit } from '@angular/core';
import { AuthService } from '@core/services';

@Component({
  selector: 'app-dialog-logout',
  templateUrl: './dialogLogout.component.html',
  styleUrls: ['./dialogLogout.component.scss']
})
export class DialogLogoutComponent implements OnInit {

  constructor(private authService: AuthService) { }

  localRemoveUser() {
    this.authService.signOut();
  }

  ngOnInit() {
  }

}

