import * as React from "react"
import PropTypes from "prop-types"

const Text = ({ children, size }) => {
  let fontSize = `20px`
  switch (size) {
    case TextSize.small:
      fontSize = `10px`
      break
    case TextSize.large:
      fontSize = `30px`
      break
    default:
      break
  }

  return (
    <p
      style={{
        color: `#FFFFFF`,
        // fontFamily: "Verdana, Helvetica, Times",
        fontSize: fontSize,
      }}
    >
      {children}
    </p>
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
}

Text.defaultProps = {
  size: TextSize.medium,
}

export default Text
