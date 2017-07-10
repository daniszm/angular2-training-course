import { NgExamplesKrk2Page } from './app.po';

describe('ng-examples-krk2 App', () => {
  let page: NgExamplesKrk2Page;

  beforeEach(() => {
    page = new NgExamplesKrk2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
