import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    moduleId: module.id,
    template: `<div>Page 1</div>
    <div>
        <a [routerLink]="['three']">Three</a> <a [routerLink]="['four']">Four</a>
    </div>
    <router-outlet></router-outlet>`,
    directives: [ ROUTER_DIRECTIVES ],
    
})
export class OneComponent { }
