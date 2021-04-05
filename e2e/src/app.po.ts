import { browser, by, element, promise } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getPageTitle(): promise.Promise<string> {
    return element(by.css('ion-title')).getText();
  }


  getGeneratedPassword(): promise.Promise<string> {
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

  async setUppercaseToggleState(state: boolean): Promise<any> {
    const inputElement = element(by.css('#upper-usage-selector'));
    if (await inputElement.getAttribute('value') !== state.toString()) {
      inputElement.click();
    }
  }
}
