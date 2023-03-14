import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'stencil-generate-demo',
  styleUrl: 'stencil-generate-demo.css',
  shadow: true,
})
export class StencilGenerateDemo {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
