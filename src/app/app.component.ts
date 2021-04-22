import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SampleApp';

  message: string = '';
  testOutput(courseName: string) {
    this.message = `Your registration for ${courseName} is successful`;
  }
}
