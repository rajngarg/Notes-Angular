import { FormsModule } from '@angular/forms';
import { UpdateDialog } from './update.dialog';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdcTextFieldModule, MdcDialogModule, MdcIconModule } from '@angular-mdc/web';


@NgModule({
    declarations: [
        UpdateDialog,
    ],
    imports: [
        CommonModule,
        FormsModule,
        MdcTextFieldModule,
        MdcIconModule,
        MdcDialogModule,
    ],
    providers: [],
    bootstrap: [UpdateDialog]
})
export class UpdateModule { }
