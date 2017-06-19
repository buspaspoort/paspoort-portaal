import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserComponent} from "./user.component";
import {SigninComponent} from './signin/signin.component';
import {RecoverComponent} from './recover/recover.component';
import {RouterModule} from "@angular/router";

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [UserComponent, SigninComponent, RecoverComponent]
})
export class UserModule {
}
