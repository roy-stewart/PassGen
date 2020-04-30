import { browser, by, element, promise } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getPageTitle(): Promise<string> {
    return element(by.css('ion-title')).getText();
  }


  getGeneratedPassword(): Promise<string> {
    return element(by.css('#generated-password')).getText();
  }

  getLowercaseToggleState(): Promise<boolean> {
    return Promise.resolve(false);
  }

  async setLowercaseToggleState(state: boolean): Promise<any> {
    const inputElement = element(by.css('#lower-toggle'));
    if (await inputElement.getAttribute('value') !== state.toString()) {
      inputElement.click();
    }
  }
}
