import { ValidationFormPage } from './app.po';

describe('validation-form App', () => {
  let page: ValidationFormPage;

  beforeEach(() => {
    page = new ValidationFormPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
