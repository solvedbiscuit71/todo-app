import styled from "@emotion/styled";

export default styled.li({
  minHeight: 52,
  display: "flex",
  gap: "1em",
  alignItems: "center",
  fontSize: ".8rem",
  borderBottomWidth: 1.5,
  borderBottomStyle: "solid",
  padding: "0 1.875em",
  "p": {
    margin: 0,
    width: "75%",
    overflowX: "auto",
    whiteSpace: "nowrap"
  },
  position: "relative",
  ".cross": {
    opacity: 0,
    transition: "opacity 250ms ease-in-out",
    position: "absolute",
    top: "50%",
    right: "1.875em",
    transform: "scale(.8) translateY(-50%)"
  },

  "&:hover": {
    cursor: "pointer",
    ".cross": {
      opacity: 1
    }
  }
},props => ({
  borderBottomColor: props.theme.checkBorder,
  transition: `border-bottom-color ${props.theme.duration} ${props.theme.timeFunction}`,

  "p": {
    textDecoration: props.checked ? "line-through" : "",
    color: props.checked ? props.theme.fontStroke : props.theme.fontNormal,
    transition: `color ${props.theme.duration} ${props.theme.timeFunction}`,
  }
}))