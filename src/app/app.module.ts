import { UpdateDialog } from './components/update.dialog';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MdcIconModule, MdcButtonModule, MdcDrawerModule, MdcListModule, MdcCardModule, MdcFormFieldModule, MdcTextFieldModule, MdcFabModule, MdcTopAppBarModule, MdcDialog, MdcDialogModule, MdcSnackbarModule } from '@angular-mdc/web';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UpdateDialog,
  ],
  imports: [
    BrowserModule,
    MdcButtonModule,
    MdcDrawerModule,
    MdcDialogModule,
    MdcSnackbarModule,
    FormsModule,
    MdcCardModule,
    MdcFabModule,
    MdcTopAppBarModule,
    MdcListModule,
    MdcFormFieldModule,
    HttpClientModule,
    MdcTextFieldModule,
    MdcIconModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent, UpdateDialog],
})
export class AppModule { }
