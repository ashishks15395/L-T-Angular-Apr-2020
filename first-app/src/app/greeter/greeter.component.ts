import { Component } from '@angular/core';

@Component({
    selector : 'app-greeter',
    templateUrl : 'greeter.component.html',
    styleUrls : [ 'greeter.component.css' ]
})
export class GreeterComponent{
    message : string = 'Default Greet Message';
    userName : string = '';

    onGreetClick(){
        this.message = `Hi ${this.userName}, Have a nice day!`;
    }
}