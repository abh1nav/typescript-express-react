import React, { Component } from "react";

import "./App.less";

export interface AppProps {
  greeting: string;
}

interface AppState {
  name: string;
}

export default class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      name: "Person",
    } as AppState;
  }

  render() {
    return (
      <div className="app">
        <span className="heading">
          {this.props.greeting} {this.state.name}
        </span>
      </div>
    );
  }
}
