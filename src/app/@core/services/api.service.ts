import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Token } from '../models/token.model';
import { Employee } from '@core/models/employee.model';
import { Kiosks } from '@core/models/kiosks.model';
import { SomeKiosk } from '@core/models/some-kiosk';

import { environment } from '@env/environment';
import { any } from 'codelyzer/util/function';
import { CategoriesModel } from '@core/models/categories.model';

const apiBase = `${environment.apiUrl}api-admin/v1/`;
const apiKiosks = `${environment.apiUrl}api/v1/kiosks/`;
const apiCategories = `${environment.apiUrl}api-admin/v1/product-categories`;

@Injectable({ providedIn: 'root' })
export class ApiService {
  private urls = {
    auth: `${apiBase}auth/login`,
    profile: `${apiBase}users/profile`,
    kiosks: `${apiKiosks}`,
    categories: `${apiCategories}`
  };

  constructor(private http: HttpClient) {
  }
  public user: Employee;
  initializeApp(): Promise<any> {
    const promise = Promise.resolve();
    // We don't need to get user for login page
    if (window.location.href.indexOf('/login') === -1) {
      promise.then(() => this.getUser().toPromise())
        .then(res => {
          this.user = res;
          console.log(res);
        })
        .catch(console.error);
    }
    return promise;
  }

  public getUser() {
    return this.http.get<Employee>(this.urls.profile);
  }
  public getKiosks(): Observable<Kiosks[]> {
    return this.http.get<Kiosks[]>(this.urls.kiosks);
  }
  public getSomeKiosk(id: string): Observable<SomeKiosk> {
    return this.http.get<SomeKiosk>(this.urls.kiosks + id);
  }
  public  getCategories(): Observable<CategoriesModel[]> {
    return this.http.get<CategoriesModel[]>(this.urls.categories);
  }
  public signIn(credentials): Observable<Token> {
    return this.http.post<Token>(this.urls.auth, credentials);
  }
}
