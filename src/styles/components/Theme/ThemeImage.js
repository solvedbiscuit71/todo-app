import styled from "@emotion/styled";

export default styled.div({
  position: "absolute",
  zIndex: -1,
  top: 0,
  left: 0,
  width: "100%",
  aspectRatio: "375 / 200",

  "img": {
    position: "absolute",
    width: "100%",
    top: 0,
    left: 0,
    transition: "opacity 250ms ease-in-out"
  }

},props => ({
  aspectRatio: props.isDesktop ? "1400 / 300" : "375 / 200",
  ".light": {
    opacity: props.darkMode ? 0 : 1
  },
  ".dark": {
    opacity: props.darkMode ? 1 : 0
  }
}))