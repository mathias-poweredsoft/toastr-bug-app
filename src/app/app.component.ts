import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private toastr: ToastrService) {

  }

  toast() {
    this.toastr.success('hello world', 'test');
  }
}
