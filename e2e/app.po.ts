export class RouterSampleProjectPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('router-sample-project-app h1')).getText();
  }
}
