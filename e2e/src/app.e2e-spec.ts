import { AppPage } from './app.po';
import { browser, element, by, ElementFinder } from 'protractor';

describe('Pass Gen', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display placeholder for generated passwords', () => {
    page.navigateTo();
    expect(page.getGeneratedPassword()).toContain('Generate Password');
  });

  it('should generate a new password when the "Generate" button is pressed', async () => {
    const previousPassword = await page.getGeneratedPassword();
    await page.getGenerateButton().click();
    expect(page.getGeneratedPassword()).not.toEqual(previousPassword);
    });
  });

  it('should use lowercase characters when enabled', () => {
    // TODO: check that only lowercase characters are used
  });
});
