import React, { Component, Fragment } from "react";

export default class Seats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      on: this.props.daDat,
      ghe: `${this.props.alpha + this.props.item}`,
      viTri: this.props.viTri,
    };
  }
  handleOn = () => {
    const objViTri = {
      ghe: this.state.ghe,
    };
    if (this.state.on === false) {
      this.props.viTri.push(this.state.ghe);
      console.log("you click " + this.props.alpha + this.props.item);
      this.setState(
        {
          on: !this.state.on,
          viTri: this.props.viTri,
        },
        this.props.handleCount(1),
        console.log(this.props.viTri),
        console.log(this.state.viTri),
        console.log(this.props.handleVe(this.props.viTri))
      );
      // return viTri
    } else {
      this.props.viTri.splice(this.state.on, 1);
      this.setState(
        {
          on: !this.state.on,
          viTri: this.props.viTri,
        },
        this.props.handleCount(-1),
        console.log("you deleted"),
        console.log(this.props.viTri),
        console.log(this.state.viTri),
        console.log(this.props.handleVe(this.props.viTri))
      );
    }
  };
  render() {
      return (
        <Fragment>
          <li
            onClick={this.handleOn}
            className={this.state.on ? "omb-taken omb-check" : "omb-available"}
            style={{
              width: "40.23529411764706px",
              height: "40.23529411764706px",
              lineHeight: "40.23529411764706px",
            }}
          >
            {this.props.item}
          </li>
        </Fragment>
      );
  }
}
