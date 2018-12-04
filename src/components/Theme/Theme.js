import React, { Component } from 'react';

class Theme extends Component {

  render() {
    const { children } = this.props;

    return (
      <div className="setTheme">
        <style jsx="true">
        {`
          body {
            background-color: #455A64;
            body, h1, h2, h3, h4, h5, h6, p, ol, ul {
              color: #FAFAFA
            }
          }
        `}
        </style>
        { children }
      </div>
    );
  }
}

export default Theme;