import {Component} from '@angular/core';
import {Exemple} from "./exemple/exemple";

@Component({
    selector: 'app-root',
    templateUrl: './app.html',
    imports: [
        Exemple
    ],
    styleUrl: './app.scss'
})
export class App {
    public colorRed: string = "red";
    public textOutput: string = "";

    public changeColor(){
        this.colorRed = "blue";
    }

    public exempleOutput(exempleText: string) {
        this.textOutput = exempleText;
    }
}
