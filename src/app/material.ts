import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
    imports: [MatToolbarModule,MatIconModule,MatCardModule,MatDialogModule,MatSnackBarModule],
    exports: [MatToolbarModule,MatIconModule,MatCardModule,MatDialogModule,MatSnackBarModule],
})








export class MaterialModule { }