import { newSpecPage } from '@stencil/core/testing';
import { VgfiitAmbulanceWlList } from '../vgfiit-ambulance-wl-list';

describe('vgfiit-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [VgfiitAmbulanceWlList],
      html: `<vgfiit-ambulance-wl-list></vgfiit-ambulance-wl-list>`,
    });
    const wlList = page.rootInstance as VgfiitAmbulanceWlList;
    const expectedPatients = wlList?.waitingPatients?.length

    const items = page.root.shadowRoot.querySelectorAll("md-list-item");
    expect(items.length).toEqual(expectedPatients);
  });
});
