import React, { Component } from "react";

class Title extends Component {
  constructor(props) {
    super(props);
    this.state = { data : props.data };
  }

  render() {
    return (
      <div className="title">
        <h1>{this.state.data.Title}</h1>
        <h2>80% INDICADO / {this.state.data.Genres.map(value=>{return ` ${value.Title} `})} / {this.state.data.Year} / EUA / 14</h2>
      </div>
    );
  }
}

export default Title;
