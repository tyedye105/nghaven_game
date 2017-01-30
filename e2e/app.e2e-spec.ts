import { HavenPage } from './app.po';

describe('haven App', function() {
  let page: HavenPage;

  beforeEach(() => {
    page = new HavenPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
