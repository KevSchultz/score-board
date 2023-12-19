/**
 * Flip.js
 * 
 * This component is responsible for creating a flip clock effect for the score display.
 * It uses the pqina/flip library to create the effect.
 * The component receives a value prop which is the score to display.
 * 
 * @module Flip
 */

import React from "react";

import Tick from "@pqina/flip";
import "@pqina/flip/dist/flip.min.css";
import "./style.css";

export default class Flip extends React.Component {
  constructor(props) {
    super(props);
    this._tickRef = React.createRef();
  }

  componentDidMount() {
    this._tickInstance = Tick.DOM.create(this._tickRef.current, {
      value: this.props.value
    });
  }

  componentDidUpdate() {
    if (!this._tickInstance) return;
    this._tickInstance.value = this.props.value;
  }

  componentWillUnmount() {
    if (!this._tickInstance) return;
    Tick.DOM.destroy(this._tickRef.current);
  }

  render() {
    return (
      <div ref={this._tickRef} class="tick">
        <div data-repeat="true" aria-hidden="true">
          <span id="my-flip" data-view="flip">Tick</span>
        </div>
      </div>
    );
  }
}
