import { newE2EPage } from '@stencil/core/testing';

describe('vgfiit-ambulance-wl-editor', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<vgfiit-ambulance-wl-editor></vgfiit-ambulance-wl-editor>');

    const element = await page.find('vgfiit-ambulance-wl-editor');
    expect(element).toHaveClass('hydrated');
  });
});
