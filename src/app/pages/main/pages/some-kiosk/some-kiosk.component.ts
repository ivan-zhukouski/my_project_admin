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
  public hours = [
    {title: '1'}, {title: '2'}, {title: '3'}, {title: '4'}, {title: '5'}, {title: '6'},
    {title: '7'}, {title: '8'}, {title: '9'}, {title: '10'}, {title: '11'}, {title: '12'},
    {title: '13'}, {title: '14'}, {title: '15'}, {title: '16'}, {title: '17'}, {title: '18'},
    {title: '19'}, {title: '20'}, {title: '21'}, {title: '22'}, {title: '23'}, {title: '24'},
  ];
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.apiService.getSomeKiosk(params.id)
        .subscribe((data: SomeKiosk) => this.kiosk = data);
    });

  }
}
