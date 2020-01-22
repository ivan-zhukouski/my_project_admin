import { Component, OnInit } from '@angular/core';
import { ApiService } from '@core/services';
import { Kiosks } from '@core/models/kiosks.model';
import { SomeKiosk } from '@core/models/some-kiosk';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  kiosks: Kiosks[];
  constructor(
    public apiService: ApiService,
    private router: Router
  ) {
  }
  ngOnInit() {
    this.apiService.getKiosks().subscribe((data: Kiosks[]) => this.kiosks = data);
  }
  goToKiosk(id) {
    this.router.navigate(['kiosks', id]);
  }
}
