import * as React from "react"
import PropTypes from "prop-types"

const Text = ({ children, size, className }) => {
  let fontSize = `16px`
  switch (size) {
    case TextSize.small:
      fontSize = `12px`
      break
    case TextSize.large:
      fontSize = `36px`
      break
    default:
      break
  }

  return (
    <div
      className={className}
      style={{
        color: `#FFFFFF`,
        fontFamily: "Verdana, Helvetica, Times",
        fontSize: fontSize,
        marginTop: "0px",
      }}
    >
      {children}
    </div>
  )
}

const TextSize = {
  small: "small",
  medium: "medium",
  large: "large",
}

Text.propTypes = {
  children: PropTypes.string,
  size: PropTypes.string,
  className: PropTypes.string,
}

Text.defaultProps = {
  size: TextSize.medium,
}

export default Text
