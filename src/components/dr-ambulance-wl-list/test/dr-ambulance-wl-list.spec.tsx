import { newSpecPage } from '@stencil/core/testing';
import { DrAmbulanceWlList } from '../dr-ambulance-wl-list';

describe('dr-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DrAmbulanceWlList],
      html: `<dr-ambulance-wl-list></dr-ambulance-wl-list>`,
    });

    const wlList = page.rootInstance as DrAmbulanceWlList;
    const expectedPatients = wlList?.waitingPatients?.length;
    const items = page.root.shadowRoot.querySelectorAll('md-list-item');

    expect(items.length).toEqual(expectedPatients);
  });
});
