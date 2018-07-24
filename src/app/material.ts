import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
    exports: [MatToolbarModule, MatIconModule, MatCardModule, MatDialogModule, MatSnackBarModule],
    imports: [MatToolbarModule, MatIconModule, MatCardModule, MatDialogModule, MatSnackBarModule],
})








export class MaterialModule { }
