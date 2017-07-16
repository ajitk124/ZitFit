import { ZitFitPage } from './app.po';

describe('zit-fit App', () => {
  let page: ZitFitPage;

  beforeEach(() => {
    page = new ZitFitPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
