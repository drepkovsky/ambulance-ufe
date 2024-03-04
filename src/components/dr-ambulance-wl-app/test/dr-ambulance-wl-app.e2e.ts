import { newE2EPage } from '@stencil/core/testing';

describe('dr-ambulance-wl-app', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<dr-ambulance-wl-app></dr-ambulance-wl-app>');

    const element = await page.find('dr-ambulance-wl-app');
    expect(element).toHaveClass('hydrated');
  });
});
