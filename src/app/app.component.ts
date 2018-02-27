import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  loadedFeature: string;
  // temp=false;
  // temp1=false;

  whichButtonClicked(buttonClicked){
    this.loadedFeature=buttonClicked;
  
  }
}
