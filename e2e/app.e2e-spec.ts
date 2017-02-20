import { A6LazyLodaingModulePage } from './app.po';

describe('a6-lazy-lodaing-module App', function() {
  let page: A6LazyLodaingModulePage;

  beforeEach(() => {
    page = new A6LazyLodaingModulePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
