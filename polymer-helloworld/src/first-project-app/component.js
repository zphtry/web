class FirstProjectApp extends Polymer.Element {

  static get is() { return 'first-project-app'; }

  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'first-project-app'
      }
    };
  }

  constructor() {
    super();
    this.owner = "Daniel Defo";
  }

  handler() {
    console.log('hello');
  }
}

window.customElements.define(FirstProjectApp.is, FirstProjectApp);