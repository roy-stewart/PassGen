import { AppPage } from './app.po';
import { browser, element, by, ElementFinder } from 'protractor';

describe('new App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display placeholder for generated passwords', () => {
    page.navigateTo();
    expect(page.getGeneratedPassword()).toContain('Generate Password');
  });

  it('should generate a new password when the "Generate" button is pressed', () => {
    element(by.css('#generate-button')).click().then(() => {
      expect(page.getGeneratedPassword()).toMatch(/.*/);
    });
  });

  it('should use lowercase characters when enabled', () => {
    // TODO: check that only lowercase characters are used
  });
});
