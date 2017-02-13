import { KendoI18nSamplePage } from './app.po';

describe('kendo-angular-i18n-sample App', function() {
  let page: KendoI18nSamplePage;

  beforeEach(() => {
    page = new KendoI18nSamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
