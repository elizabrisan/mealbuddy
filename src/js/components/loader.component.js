import React from "react";

class Loader extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.loaded) {
      return (<span className={this.props.className}>{this.props.children}</span>);
    } else {
      return (<span className={this.props.className}>
        <div className="text-center">
          <span className="page-loader__spinner" style={{
            display: 'inline-block'
          }}>
            <svg viewBox="25 25 50 50">
              <circle cx="50" cy="50" r="20" fill="none" strokeWidth="2" strokeMiterlimit="10"></circle>
            </svg>
          </span>
        </div>
      </span>)
    }
  }

}

export default Loader;
