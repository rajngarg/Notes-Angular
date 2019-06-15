import { UpdateDialog } from './components/update.dialog';
import { ApiService } from './services/api.service';
import { Component } from '@angular/core';
import { MdcDialog, MdcDialogRef, MDC_DIALOG_DATA, MdcSnackbar } from '@angular-mdc/web';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  notes: any
  title: string = ""
  note: string = ""
  noteId: string = ""

  constructor(
    public apiService: ApiService,
    public dialog: MdcDialog,
    public snackbar: MdcSnackbar
  ) {
    this.getNotes();
  }

  getNotes() {
    this.apiService.getAllNotes().subscribe((data) => {
      this.notes = data
    })
  }

  openUpdateDialog(id: string, title: string, note: string) {
    const dialogRef = this.dialog.open(UpdateDialog,
      { data: { noteId: id, title: title, note: note } });

    dialogRef.afterClosed().subscribe((result) => {
      if (result != 'close') {
        this.getNotes()
      }
    });
  }

  createNote() {

    if (this.title == "" || this.note == "") {
      this.snackBar()
      return
    }

    let note = {
      title: this.title,
      note: this.note
    }

    this.apiService.createNote(note).subscribe((data) => {
      this.getNotes()
    })

    this.title = ""
    this.note = ""

  }

  deleteNote(id: string) {
    this.apiService.deleteNote(id).subscribe(() =>
      this.getNotes()
    );
  }

  snackBar() {
    this.snackbar.open(`Please Enter Title or Note`, "Close");
  }

}
