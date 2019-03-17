import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Waves from "./../Waves";
import { Link } from "react-scroll";

class SmoothScroll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cursorPos: {}
    };
  }

  handleClick = e => {
    if (!this.props.disabled) {
      e.stopPropagation();
      // Waves - Get Cursor Position
      let cursorPos = {
        top: e.clientY,
        left: e.clientX,
        time: Date.now()
      };
      this.setState({ cursorPos: cursorPos });
    }
  };

  render() {
    const {
      children,
      className,
      disabled,
      active,
      to,
      spy,
      smooth,
      offset,
      duration,
      ...attributes
    } = this.props;

    const classes = classNames(
      "nav-link",
      disabled ? "disabled" : "Ripple-parent",
      active && "active",
      className
    );

    return (
      <Link
        className={classes}
        onMouseUp={this.handleClick}
        onTouchStart={this.handleClick}
        to={to}
        spy={spy}
        smooth={smooth}
        offset={offset}
        duration={duration}
        {...attributes}
      >
        {children}
        {this.props.disabled ? (
          false
        ) : (
            <Waves cursorPos={this.state.cursorPos} />
          )}
      </Link>
    );
  }
}

SmoothScroll.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  active: PropTypes.bool,
  spy: PropTypes.bool,
  smooth: PropTypes.bool,
  offset: PropTypes.number,
  duration: PropTypes.number
};

SmoothScroll.defaultProps = {
  active: false,
  className: "",
  disabled: false,
  spy: true,
  smooth: true,
  offset: -70,
  duration: 500
}

export default SmoothScroll;
export { SmoothScroll as MDBSmoothScroll };
