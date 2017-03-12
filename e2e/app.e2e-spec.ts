import { CliDoubleClickTestPage } from './app.po';

describe('cli-double-click-test App', () => {
  let page: CliDoubleClickTestPage;

  beforeEach(() => {
    page = new CliDoubleClickTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
