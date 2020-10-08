import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.css' ]
})
export class AppComponent {
    title = 'template-driven';
    @ViewChild('f') form: NgForm;

    suggestUserName(): void {
        const firstName = this.form.value.userData.firstName;
        const lastName = this.form.value.userData.lastName;

        this.form.form.patchValue({ userData: { userName: firstName + lastName } });
    }

    onSubmit(): void {
        alert('You signed up successfully!');
        this.form.reset();
    }
}
