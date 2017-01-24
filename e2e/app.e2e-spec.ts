import { NemaSitePage } from './app.po';

describe('nema-site App', function() {
  let page: NemaSitePage;

  beforeEach(() => {
    page = new NemaSitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
