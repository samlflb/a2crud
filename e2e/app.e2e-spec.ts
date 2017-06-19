import { A2crudPage } from './app.po';

describe('a2crud App', function() {
  let page: A2crudPage;

  beforeEach(() => {
    page = new A2crudPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
