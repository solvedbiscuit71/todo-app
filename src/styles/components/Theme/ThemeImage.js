import styled from "@emotion/styled";

export default styled.div(props => ({
  aspectRatio: props.isDesktop ? "1400 / 300" : "375 / 200",
  left: 0,
  position: "absolute",
  top: 0,
  width: "100%",
  zIndex: -1,

  "img": {
    left: 0,
    position: "absolute",
    top: 0,
    transition: `opacity ${props.theme.duration} ${props.theme.timeFunction}`,
    width: "100%",
  },

  ".dark": { opacity: props.theme.darkMode ? 1 : 0 },
  ".light": { opacity: props.theme.darkMode ? 0 : 1 }
}))