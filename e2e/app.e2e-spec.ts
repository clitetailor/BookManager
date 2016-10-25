import { BookManagerPage } from './app.po';

describe('book-manager App', function() {
  let page: BookManagerPage;

  beforeEach(() => {
    page = new BookManagerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
