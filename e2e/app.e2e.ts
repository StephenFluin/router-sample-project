import { RouterSampleProjectPage } from './app.po';

describe('router-sample-project App', function() {
  let page: RouterSampleProjectPage;

  beforeEach(() => {
    page = new RouterSampleProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('router-sample-project works!');
  });
});
