import * as React from "react"
import PropTypes from "prop-types"

const Text = ({ children, size }) => {
  let fontSize = `18px`
  switch (size) {
    case TextSize.small:
      fontSize = `14px`
      break
    case TextSize.large:
      fontSize = `30px`
      break
    default:
      break
  }

  return (
    <div
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
}

Text.defaultProps = {
  size: TextSize.medium,
}

export default Text
