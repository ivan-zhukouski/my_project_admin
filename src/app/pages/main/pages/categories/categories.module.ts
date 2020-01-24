import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesComponent } from './categories.component';
import { CategoriesRoutingModule } from './categories-routing.module';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { MatButtonModule, MatIconModule, } from '@angular/material';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';
import { NewDialogComponent } from './new-dialog/new-dialog.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    DragDropModule,
    CategoriesRoutingModule,
    FormsModule,

    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule
  ],
  entryComponents: [
    DeleteDialogComponent,
    EditDialogComponent,
    NewDialogComponent
  ],
  declarations: [CategoriesComponent, DeleteDialogComponent, EditDialogComponent, NewDialogComponent],
  exports: [CategoriesComponent]
})

export class CategoriesModule {
}
