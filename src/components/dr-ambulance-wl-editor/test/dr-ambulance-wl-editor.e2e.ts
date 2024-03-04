import { newE2EPage } from '@stencil/core/testing';

describe('dr-ambulance-wl-editor', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<dr-ambulance-wl-editor></dr-ambulance-wl-editor>');

    const element = await page.find('dr-ambulance-wl-editor');
    expect(element).toHaveClass('hydrated');
  });
});
