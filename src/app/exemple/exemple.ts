import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-exemple',
  imports: [
    NgClass
  ],
  templateUrl: './exemple.html',
  styleUrl: './exemple.scss'
})
export class Exemple {
  @Input() exempleInput: string = '';
  @Output() exempleOutput = new EventEmitter();

  public exempleClass: string = 'exemple';

  public exempleOutputFunction() {
    this.exempleOutput.emit('Je suis le message pour mon composant parent');
  }
}
