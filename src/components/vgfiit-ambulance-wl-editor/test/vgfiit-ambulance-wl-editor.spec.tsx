import { newSpecPage } from '@stencil/core/testing';
import { VgfiitAmbulanceWlEditor } from '../vgfiit-ambulance-wl-editor';

describe('vgfiit-ambulance-wl-editor', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [VgfiitAmbulanceWlEditor],
      html: `<vgfiit-ambulance-wl-editor></vgfiit-ambulance-wl-editor>`,
    });
    expect(page.root).toEqualHtml(`
      <vgfiit-ambulance-wl-editor>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </vgfiit-ambulance-wl-editor>
    `);
  });
});
