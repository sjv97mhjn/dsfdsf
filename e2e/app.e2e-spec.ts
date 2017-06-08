import { JklPage } from './app.po';

describe('jkl App', () => {
  let page: JklPage;

  beforeEach(() => {
    page = new JklPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
