import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UserComponent} from "./user/user.component";
import {SigninComponent} from "./user/signin/signin.component";
import {RecoverComponent} from "./user/recover/recover.component";
import {BusComponent} from "./bus/bus.component";
import {AuthGuard} from "./shared/auth/auth.guard";
import {UnauthGuard} from "./shared/auth/unauth.guard";
import {NotFoundComponent} from "./shared/components/not-found/not-found.component";
const routes: Routes = [
    {
        path: '',
        redirectTo: 'bus',
        pathMatch: 'full'
    },
    {
        path: 'bus',
        component: BusComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'user',
        component: UserComponent,
        canActivate: [UnauthGuard],
        children: [
            {path: 'signin', component: SigninComponent},
            {path: 'recover', component: RecoverComponent}
        ]
    },
    {path: '**', component: NotFoundComponent, canActivate: [AuthGuard]}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule {
}