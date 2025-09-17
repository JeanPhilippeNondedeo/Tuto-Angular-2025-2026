import {Component} from '@angular/core';
import {Exemple} from "./exemple/exemple";
import {RouterLink, RouterOutlet} from "@angular/router";
import {CurrencyPipe, JsonPipe, LowerCasePipe, UpperCasePipe} from "@angular/common";
import {ExponentialStrenghPipe} from "./exponential-strengh-pipe";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {TutoService} from "./tuto-service";

@Component({
    selector: 'app-root',
    templateUrl: './app.html',
    imports: [
        Exemple,
        RouterLink,
        RouterOutlet,
        UpperCasePipe,
        LowerCasePipe,
        CurrencyPipe,
        ExponentialStrenghPipe,
        ReactiveFormsModule,
        FormsModule,
        JsonPipe
    ],
    styleUrl: './app.scss'
})
export class App {
    public colorRed: string = "red";
    public textOutput: string = "";
    public conditionIf: boolean = false;
    public listFors = [
        {id:1, name: 'toto'},
        {id:2, name: 'tata'},
        {id:3, name: 'titi'}
    ];
    public donnerRecu: string = '';

    constructor(private tutoService: TutoService) {
        this.donnerRecu = tutoService.donneDuService;
    }


    //REACTIVE FORM
    public profileForm = new FormGroup({
        email: new FormControl('', Validators.email),
        age: new FormControl(''),
    });
    //TEMPLATE DRIVEN FORM
    public user = {
        firstName: '',
        lastName: '',
    };



    public changeColor(){
        this.colorRed = "blue";
    }

    public exempleOutput(exempleText: string) {
        this.textOutput = exempleText;
    }

    public changeBoolean(){
        this.conditionIf = !this.conditionIf;
    }

    public changeForm() {
        this.profileForm.patchValue({
            email: 'miage@m1.com',
            age: '100',
        })
    }

    public onSubmit() {
        console.log('Formulaire soumis !', this.user);
    }
}
