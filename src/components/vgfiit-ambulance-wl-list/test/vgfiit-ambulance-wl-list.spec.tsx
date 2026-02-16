import { newSpecPage } from '@stencil/core/testing';
import { VgfiitAmbulanceWlList } from '../vgfiit-ambulance-wl-list';

describe('vgfiit-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [VgfiitAmbulanceWlList],
      html: `<vgfiit-ambulance-wl-list></vgfiit-ambulance-wl-list>`,
    });
    expect(page.root).toEqualHtml(`
      <vgfiit-ambulance-wl-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </vgfiit-ambulance-wl-list>
    `);
  });
});
