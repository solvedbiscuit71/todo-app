import styled from "@emotion/styled";

export default styled.div({
  width: 26,
  height: 26,
  position: "relative",
  "svg": {
    position: "absolute",
    top: 0,
    left: 0,
  }
},props => ({
  "svg": {
    transition: `opacity ${props.theme.duration} ${props.theme.timeFunction}`,
  },
  ".light": {
    opacity: props.theme.darkMode ? 0 : 1
  },
  ".dark": {
    opacity: props.theme.darkMode ? 1 : 0
  }
}))