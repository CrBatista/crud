import { AppPage } from './app.po';

describe('End to end root testing:', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).not.toEqual('This message won\'t appear');
  });
});
