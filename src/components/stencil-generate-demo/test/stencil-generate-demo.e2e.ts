import { newE2EPage } from '@stencil/core/testing';

describe('stencil-generate-demo', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<stencil-generate-demo></stencil-generate-demo>');

    const element = await page.find('stencil-generate-demo');
    expect(element).toHaveClass('hydrated');
  });
});
