import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {AuthProviders, AuthMethods, AngularFireModule} from "angularfire2";
import {AppRoutingModule} from "./app-routing.module";
import {UserModule} from "./user/user.module";
import {BusModule} from "./bus/bus.module";
import {SharedModule} from "./shared/shared.module";
import {UnauthGuard} from "./shared/auth/unauth.guard";
import {AuthGuard} from "./shared/auth/auth.guard";

export const firebaseConfig = {
    apiKey: "AIzaSyB1vJdthZ-OFTHHffibIVoTvK7-Sfx80_M",
    authDomain: "buspaspoort-7d49d.firebaseapp.com",
    databaseURL: "https://buspaspoort-7d49d.firebaseio.com",
    storageBucket: "buspaspoort-7d49d.appspot.com",
    messagingSenderId: "77656408932"

};

export const myFirebaseAuthConfig = {
    provider: AuthProviders.Password,
    method: AuthMethods.Password
};

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig),
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        UserModule,
        BusModule,
        SharedModule
    ],
    providers: [AuthGuard, UnauthGuard],
    bootstrap: [AppComponent]
})
export class AppModule {
}
