import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-exemple',
  imports: [
    NgClass
  ],
  templateUrl: './exemple.html',
  styleUrl: './exemple.scss'
})
export class Exemple implements OnInit {
  @Input() color: string = "";
  @Output() text: EventEmitter<string> = new EventEmitter();

  ngOnInit(): void {
    this.text.emit('je suis le output');
  }

}
