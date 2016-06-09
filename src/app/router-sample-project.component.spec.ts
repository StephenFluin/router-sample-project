import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { RouterSampleProjectAppComponent } from '../app/router-sample-project.component';

beforeEachProviders(() => [RouterSampleProjectAppComponent]);

describe('App: RouterSampleProject', () => {
  it('should create the app',
      inject([RouterSampleProjectAppComponent], (app: RouterSampleProjectAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'router-sample-project works!\'',
      inject([RouterSampleProjectAppComponent], (app: RouterSampleProjectAppComponent) => {
    expect(app.title).toEqual('router-sample-project works!');
  }));
});
