import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { CustomToastComponent } from './components/custom-toast/custom-toast.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomToastComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      toastComponent: CustomToastComponent
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
