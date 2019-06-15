import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) { }

  notesUrl = "https://notesclone.herokuapp.com/notes";

  getAllNotes() {
    return this.http.get(this.notesUrl)
  }

  createNote(note: any) {
    return this.http.post(this.notesUrl, note)
  }

  updateNote(note: any, id: string) {
    return this.http.put(this.notesUrl + "/" + id, note)
  }

  deleteNote(id: any) {
    return this.http.delete(this.notesUrl + "/" + id)
  }

}
