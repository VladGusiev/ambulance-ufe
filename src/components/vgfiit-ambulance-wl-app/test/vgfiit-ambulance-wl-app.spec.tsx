import { newSpecPage } from '@stencil/core/testing';
import { VgfiitAmbulanceWlApp } from '../vgfiit-ambulance-wl-app';

describe('vgfiit-ambulance-wl-app', () => {

  it('renders editor', async () => {
    const page = await newSpecPage({
      url: `http://localhost/entry/@new`,
      components: [VgfiitAmbulanceWlApp],
      html: `<vgfiit-ambulance-wl-app base-path="/"></vgfiit-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual ("vgfiit-ambulance-wl-editor");

  });

  it('renders list', async () => {
    const page = await newSpecPage({
      url: `http://localhost/ambulance-wl/`,
      components: [VgfiitAmbulanceWlApp],
      html: `<vgfiit-ambulance-wl-app base-path="/ambulance-wl/"></vgfiit-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual("vgfiit-ambulance-wl-list");
  });
});