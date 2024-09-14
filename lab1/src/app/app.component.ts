import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lab1';
  message = "String interpolation is useful";
  counter: number;
  timer: NodeJS.Timeout | null = null;

  constructor() {
    this.startCounter();
    this.counter = 0;
  }

  startCounter() {
    const intervalId = setInterval(() => {
      this.counter++;
    }, 1000);

    setTimeout(() => {
      clearInterval(intervalId);
    }, 20000);
  }
  
}
