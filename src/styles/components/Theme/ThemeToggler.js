import styled from "@emotion/styled";

export default styled.div(props => ({
  height: "1.625em",
  position: "relative",
  width: "1.625em",

  "svg": {
    left: 0,
    position: "absolute",
    top: 0,
    transition: `opacity ${props.theme.duration} ${props.theme.timeFunction}`,
  },

  ".dark": { opacity: props.theme.darkMode ? 1 : 0 },
  ".light": { opacity: props.theme.darkMode ? 0 : 1 }
}))