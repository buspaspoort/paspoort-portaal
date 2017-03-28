import { PaspoortPortaalPage } from './app.po';

describe('paspoort-portaal App', () => {
  let page: PaspoortPortaalPage;

  beforeEach(() => {
    page = new PaspoortPortaalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
