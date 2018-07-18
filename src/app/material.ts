import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';



@NgModule({
    imports: [MatToolbarModule,MatIconModule,MatCardModule,MatDialogModule],
    exports: [MatToolbarModule,MatIconModule,MatCardModule,MatDialogModule],
})








export class MaterialModule { }