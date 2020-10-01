import { Component } from '@angular/core';
import { User } from './Models/Model/user';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.css' ]
})
export class AppComponent {
    title = 'فرم ورود';
    defaultUserName = 'MehdiH';
    defaultPassword = '1';

    //Subscriber for login event of Login component.
    onlogin(user: User) {
        const correctUser = new User();
        if (user.username === correctUser.username && user.password == correctUser.password) {
            alert('با موفقیت وارد شدید!');
        } else {
            alert('نام کاربری و گذرواژه اشتباه وارد شده است.');
        }
    }
}
