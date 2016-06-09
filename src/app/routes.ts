import {RouterConfig} from '@angular/router';
import {HomeComponent} from './home.component';
import {OneComponent} from './one.component';
import {TwoComponent} from './two.component';
import {ThreeComponent} from './three.component';
import {FourComponent} from './four.component';

export const routes: RouterConfig = [
    {
        path: '/',
        component: HomeComponent,
        index: true
    },
    {
        path: '/one',
        component: OneComponent,
        children: [
            {path: '/three', component: ThreeComponent, index:true},
            {path: '/four', component: FourComponent},
        ]
    },
    {
        path: '/two',
        component: TwoComponent
    },
];