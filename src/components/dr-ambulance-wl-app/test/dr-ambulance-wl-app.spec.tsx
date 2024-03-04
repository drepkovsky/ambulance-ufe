import { newSpecPage } from '@stencil/core/testing';
import { DrAmbulanceWlApp } from '../dr-ambulance-wl-app';

describe('dr-ambulance-wl-app', () => {
  it('renders editor', async () => {
    const page = await newSpecPage({
      url: `http://localhost/entry/@new`,
      components: [DrAmbulanceWlApp],
      html: `<dr-ambulance-wl-app base-path="/"></dr-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget();
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual('dr-ambulance-wl-editor');
  });

  it('renders list', async () => {
    const page = await newSpecPage({
      url: `http://localhost/ambulance-wl/`,
      components: [DrAmbulanceWlApp],
      html: `<dr-ambulance-wl-app base-path="/ambulance-wl/"></dr-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget();
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual('dr-ambulance-wl-list');
  });
});
