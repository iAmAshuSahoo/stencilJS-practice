import { newSpecPage } from '@stencil/core/testing';
import { StencilGenerateDemo } from '../stencil-generate-demo';

describe('stencil-generate-demo', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [StencilGenerateDemo],
      html: `<stencil-generate-demo></stencil-generate-demo>`,
    });
    expect(page.root).toEqualHtml(`
      <stencil-generate-demo>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </stencil-generate-demo>
    `);
  });
});
