import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'router-sample-project-app',
  templateUrl: 'router-sample-project.component.html',
  styleUrls: ['router-sample-project.component.css'],
  directives: [ ROUTER_DIRECTIVES ],
})
export class RouterSampleProjectAppComponent {
  title = 'router-sample-project works!';
}
