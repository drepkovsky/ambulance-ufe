import { newE2EPage } from '@stencil/core/testing';

describe('dr-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<dr-ambulance-wl-list></dr-ambulance-wl-list>');

    const element = await page.find('dr-ambulance-wl-list');
    expect(element).toHaveClass('hydrated');
  });
});
