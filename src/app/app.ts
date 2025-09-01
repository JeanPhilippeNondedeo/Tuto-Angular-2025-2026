import {Component, EventEmitter, OnInit, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Exemple} from "./exemple/exemple";

@Component({
  selector: 'app-root',
    imports: [RouterOutlet, Exemple],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
    public exemple: string = '';
    public exempleOutput: string = '';

    ngOnInit(): void {
      this.exemple = 'exempleInput';
    }

    public receiveMessage(msg: string): void {
      this.exempleOutput = msg;
    }
}
