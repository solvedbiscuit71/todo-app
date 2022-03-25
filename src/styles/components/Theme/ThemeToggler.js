import styled from "@emotion/styled";

export default styled.div({
  width: 26,
  height: 26,
  position: "relative",
  "svg": {
    position: "absolute",
    top: 0,
    left: 0,
    transition: "opacity 250ms ease-in-out"
  }
},props => ({
  ".light": {
    opacity: props.darkMode ? 0 : 1
  },
  ".dark": {
    opacity: props.darkMode ? 1 : 0
  }
}))