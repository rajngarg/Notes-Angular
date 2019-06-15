import { Component, Inject, OnInit } from '@angular/core';
import { MdcDialog, MdcDialogRef, MDC_DIALOG_DATA, MdcDialogConfig } from '@angular-mdc/web';
import { ApiService } from '../services/api.service';

@Component({
    templateUrl: 'update.dialog.html',
    styleUrls: ['update.dialog.scss']
})

export class UpdateDialog {

    title: string = ""
    note: string = ""
    id: string = ""

    constructor(public dialogRef: MdcDialogRef<UpdateDialog>,
        @Inject(MDC_DIALOG_DATA) public data: any,
        public apiService: ApiService,
    ) {
        this.id = data.noteId
        this.title = data.title
        this.note = data.note
        // console.log(data)
    }

    updateNote() {
        let note = {
            title: this.title,
            note: this.note,
        }
        this.apiService.updateNote(note, this.id).subscribe(() => {
            this.dialogRef.close()
        })
    }

}