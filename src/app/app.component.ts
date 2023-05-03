import { Component, inject } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mini-store-angular';
  
  changeTitle() {
    this.title = 'change';
  }

}
