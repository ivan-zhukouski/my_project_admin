import { Component, OnInit } from '@angular/core';
import { ApiService } from '@core/services';
import { CategoriesModel } from '@core/models/categories.model';

@Component({
  selector: 'app-new-dialog',
  templateUrl: './new-dialog.component.html',
  styleUrls: ['./new-dialog.component.scss']
})
export class NewDialogComponent implements OnInit {
  categories: CategoriesModel[];
  constructor(public apiService: ApiService) { }

  ngOnInit() {
  }
addCategory(title: string): void {
  title = title.trim();
  if (!title) { return; }
  this.apiService.addCategory({ title } as CategoriesModel)
    .subscribe((category) => {
      this.categories.push(category);
    });
  }
}
