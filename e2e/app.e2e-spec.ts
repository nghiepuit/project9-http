import { Project9HttpPage } from './app.po';

describe('project9-http App', () => {
  let page: Project9HttpPage;

  beforeEach(() => {
    page = new Project9HttpPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
