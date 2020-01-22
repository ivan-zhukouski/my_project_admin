import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Employee } from '@core/models/employee.model';
import { Kiosks } from '@core/models/kiosks.model';
import { ApiService } from '@core/services';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnDestroy, OnInit {
  user: Employee;
  kiosks: Kiosks;
  mobileQuery: MediaQueryList;
  private readonly mobileQueryListener: () => void;
  public menu = [
    { title: 'Dashboard', route: '', icon: 'dashboard' },
    { title: 'Kiosks', route: '/kiosks', icon: 'store' },
    { title: 'Products', route: '/products', icon: 'fastfood' },
    { title: 'Categories', route: '/categories', icon: 'category' }
  ];

  constructor(changeDetectorRef: ChangeDetectorRef,
              media: MediaMatcher,
              public apiService: ApiService,
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this.mobileQueryListener);
  }

  ngOnInit() {
    this.apiService.getUser().subscribe((data: Employee) => this.user = data);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this.mobileQueryListener);
  }
}


