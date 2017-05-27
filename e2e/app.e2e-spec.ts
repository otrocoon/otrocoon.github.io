import { OtrocoonPage } from './app.po';

describe('otrocoon App', () => {
  let page: OtrocoonPage;

  beforeEach(() => {
    page = new OtrocoonPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
