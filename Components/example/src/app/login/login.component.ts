import { User } from './../Models/Model/user';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: [ './login.component.css' ]
})
export class LoginComponent implements OnInit {
    //Input parameters
    @Input() userName: string;
    @Input() password: string;

    //Output is Event
    @Output() login = new EventEmitter<User>();

    constructor() {}

    ngOnInit(): void {}

    btnLoginClicked() {
        const user = new User();
        user.username = this.userName;
        user.password = this.password;

        //raise or emit event to send value to parent component
        this.login.emit(user);
    }
}
