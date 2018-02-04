import React from 'react';
import propTypes from 'prop-types';
import "./round-progress.component.scss";

class RoundProgress extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
    let styles = {
        label: {
          backgroundColor: this.props.backgroundColor || "#3875d8",
          color: this.props.color || "#ecf0f1"
        },
        halfCircle: {
          borderColor: this.props.borderColor || "#3498db"
        }
      },
      prog = this.props.progress * 3.6;

    if (this.props.progress <= 50) {
      styles = {
        ...styles,
        leftSide: {
          ...styles.halfCircle,
          transform: `rotate(${prog}deg)`
        },
        rightSide: {
          display: 'none'
        }
      }
    } else {
      styles = {
        ...styles,
        leftSide: {
          ...styles.halfCircle,
          transform: `rotate(${prog}deg)`
        },
        rightSide: {
          ...styles.halfCircle,
          transform: `rotate(180deg)`
        },

        pieStyle: {
          clip: 'rect(auto, auto, auto, auto)'

        }
      }
    }

    return (<div className="set-size charts-container">
      <div className="pie-wrapper ">
        <span className="label" style={styles.label}>{this.props.text}</span>
        <div className="pie" style={styles.pieStyle}>
          <div className="left-side half-circle" style={styles.leftSide}></div>
          <div className="right-side half-circle" style={styles.rightSide}></div>
        </div>
      </div>
    </div>)
  }

}

RoundProgress.propTypes = {
  text: propTypes.string,
  progress: propTypes.number.isRequired,
  backgroundColor: propTypes.string,
  borderColor: propTypes.string,
  color: propTypes.string
}

export default RoundProgress;
