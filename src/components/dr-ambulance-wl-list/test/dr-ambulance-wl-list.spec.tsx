import { newSpecPage } from '@stencil/core/testing';
import { DrAmbulanceWlList } from '../dr-ambulance-wl-list';

describe('dr-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DrAmbulanceWlList],
      html: `<dr-ambulance-wl-list></dr-ambulance-wl-list>`,
    });
    expect(page.root).toEqualHtml(`
      <dr-ambulance-wl-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </dr-ambulance-wl-list>
    `);
  });
});
