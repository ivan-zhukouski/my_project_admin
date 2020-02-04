import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { CategoriesModel } from '@core/models/categories.model';
import { ApiService } from '@core/services';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';
import { NewDialogComponent } from './new-dialog/new-dialog.component';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  constructor(public apiService: ApiService,
              public dialog: MatDialog) {
  }
  categories: CategoriesModel[];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.categories, event.previousIndex, event.currentIndex);
  }
  ngOnInit() {
    this.getCategories();
  }
  getCategories(): void {
    this.apiService.getCategories().subscribe((categories: CategoriesModel[]) => this.categories = categories);
  }
  delete(categoryObj) {
    this.apiService.deleteCategory(categoryObj.id).subscribe();
  }
  openDeleteDialog(categoryObj) {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '250px',
      data: {id: categoryObj.id}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openEditDialog(category) {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      width: '250px',
      data: {name: category.title}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Cancel`);
      if (result === undefined) {
        return false;
      } else {
        category.title = result;
      }
    });
  }
  openNewDialog() {
    const dialogRef = this.dialog.open(NewDialogComponent, {
      width: '250px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
