import { KendoAngularI18nSamplePage } from './app.po';

describe('kendo-angular-i18n-sample App', () => {
  let page: KendoAngularI18nSamplePage;

  beforeEach(() => {
    page = new KendoAngularI18nSamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
