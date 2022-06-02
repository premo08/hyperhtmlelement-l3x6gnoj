import HyperHTMLElement from "hyperhtml-element";

class MyCounter extends HyperHTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  created() {
    this.count = 0;
    this.render();
  }

  inc = () => {
    this.count++;
    this.render();
  };

  dec = () => {
    this.count--;
    this.render();
  };

  render() {
    return this.html`
    <style>
      * {
        font-size: 200%;
      }

      span {
        width: 4rem;
        display: inline-block;
        text-align: center;
      }

      button {
        width: 4rem;
        height: 4rem;
        border: none;
        border-radius: 10px;
        background-color: seagreen;
        color: white;
      }
    </style>
    <button onclick=${this.dec}>-</button>
    <span>${this.count}</span>
    <button onclick=${this.inc}>+</button>
    `;
  }
}

MyCounter.define("my-counter");
