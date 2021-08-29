class AppDrawer extends HTMLElement {

    // A getter/setter for an open property.
    get open() {
      return this.hasAttribute('open');
    }
  
    set open(val) {
      // Reflect the value of the open property as an HTML attribute.
      if (val) {
        this.setAttribute('open', '');
      } else {
        this.removeAttribute('open');
      }
      this.toggleDrawer();
    }
  
    // A getter/setter for a disabled property.
    get disabled() {
      return this.hasAttribute('disabled');
    }
  
    set disabled(val) {
      // Reflect the value of the disabled property as an HTML attribute.
      if (val) {
        this.setAttribute('disabled', '');
      } else {
        this.removeAttribute('disabled');
      }
    }
  
    // Can define constructor arguments if you wish.
    constructor() {
      // If you define a constructor, always call super() first!
      // This is specific to CE and required by the spec.
      super();
  
      // Setup a click listener on <app-drawer> itself.
      this.addEventListener('click', e => {
        // Don't toggle the drawer if it's disabled.
        if (this.disabled) {
          return;
        }
        this.toggleDrawer();
      });
    }
  
        static get observedAttributes() {
            return ['disabled', 'open'];
          }
        
          get disabled() {
            return this.hasAttribute('disabled');
          }
        
          set disabled(val) {
            if (val) {
              this.setAttribute('disabled', '');
            } else {
              this.removeAttribute('disabled');
            }
          }
        
          // Only called for the disabled and open attributes due to observedAttributes
          attributeChangedCallback(name, oldValue, newValue) {
            // When the drawer is disabled, update keyboard/screen reader behavior.
            if (this.disabled) {
              this.setAttribute('tabindex', '-1');
              this.setAttribute('aria-disabled', 'true');
            } else {
              this.setAttribute('tabindex', '0');
              this.setAttribute('aria-disabled', 'false');
            }
    
  }
  
  customElements.define('app-drawer', AppDrawer);