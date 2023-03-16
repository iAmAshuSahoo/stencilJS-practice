class Tooltip extends HTMLElement {
    constructor() {
        super();
        // constructor is there for basic initialization - For updating dom use connectedCallback()
        this.tooltipContainer;
        this._tooltipText = "Some Dummy Default Text";
        // Introducing Shadow Dom - It is nice to have contents of the component behind the shadow instead of loading and hiding
        this.attachShadow({mode: 'open'});
        // const template = document.querySelector('#tooltip-template');
        // this.shadowRoot.appendChild(template.content.cloneNode(true));   -->> Using TEMPLATE example
        // Unlike appendChild that tries to access DOM - innerHTML sets the instruction and changes DOM once it is created
        this.shadowRoot.innerHTML = `
            <style>
                div {
                    background-color: black;
                    color: white;
                    position: absolute;
                    z-index: 10;
                }
            </style>
            <slot>Default Slot</slot>
            <span>(?)</span>    
        `;
    }

    connectedCallback() {
        // Setting value when passing data in attributes
        if(this.hasAttribute('text')) {
            this._tooltipText = this.getAttribute('text');
        }
        const tooltip = this.shadowRoot.querySelector('span');
        // tooltip.textContent = ' (?)';
        tooltip.style.position = 'relative';
        // Adding events to tooltip
        tooltip.addEventListener('mouseenter', this._showTooltip.bind(this));
        tooltip.addEventListener('mouseleave', this._hideTooltip.bind(this));
        this.shadowRoot.appendChild(tooltip);
    }

    _showTooltip()  {
        this.tooltipContainer = document.createElement('div');
        this.tooltipContainer.textContent = this._tooltipText;
        // Styling the tooltip - This is taken care in this.shadowRoot.innerHTML
        // this.tooltipContainer.style.backgroundColor = 'black';
        // this.tooltipContainer.style.color = 'white';
        // this.tooltipContainer.style.zIndex = '5';
        // this.tooltipContainer.style.position = 'absolute';

        this.shadowRoot.appendChild(this.tooltipContainer);
    }

    _hideTooltip() {
        this.shadowRoot.removeChild(this.tooltipContainer);
    }
}

customElements.define("tooltip-web-component", Tooltip);