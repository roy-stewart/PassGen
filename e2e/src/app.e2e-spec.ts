import { AppPage } from './app.po';

describe('Pass Gen', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display a placeholder for generated passwords', () => {
    page.navigateTo();
    expect(page.getGeneratedPassword()).toContain('Generate Password');
  });

  it('should generate a new password when the "Generate" button is pressed', async () => {
    const previousPassword = await page.getGeneratedPassword();
    await page.getGenerateButton().click();
    expect(page.getGeneratedPassword()).not.toEqual(previousPassword);
  });
});
