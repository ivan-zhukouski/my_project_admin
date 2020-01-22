import { Component, OnInit } from '@angular/core';
import { ApiService } from '@core/services';
import { Kiosks } from '@core/models/kiosks.model';

@Component({
  selector: 'app-kiosks',
  templateUrl: './kiosks.component.html',
  styleUrls: ['./kiosks.component.scss']
})
export class KiosksComponent implements OnInit {
  kiosks: Kiosks[];
  constructor(
    public apiService: ApiService,
  ) {
  }
  ngOnInit() {
    this.apiService.getKiosks().subscribe((data: Kiosks[]) => this.kiosks = data);
  }
}
