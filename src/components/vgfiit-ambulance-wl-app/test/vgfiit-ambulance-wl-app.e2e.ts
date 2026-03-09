import { newE2EPage } from '@stencil/core/testing';

describe('vgfiit-ambulance-wl-app', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<vgfiit-ambulance-wl-app></vgfiit-ambulance-wl-app>');

    const element = await page.find('vgfiit-ambulance-wl-app');
    expect(element).toHaveClass('hydrated');
  });
});
