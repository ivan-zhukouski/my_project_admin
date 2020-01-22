import { Component, OnInit } from '@angular/core';
import { SomeKiosk } from '@core/models/some-kiosk';
import { ApiService } from '@core/services';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-some-kiosk',
  templateUrl: './some-kiosk.component.html',
  styleUrls: ['./some-kiosk.component.scss']
})
export class SomeKioskComponent implements OnInit {
  kiosk: SomeKiosk;
  constructor(public apiService: ApiService, private route: ActivatedRoute) {
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.apiService.getSomeKiosk(params.id)
        .subscribe((data: SomeKiosk) => this.kiosk = data);
    });

  }
}
