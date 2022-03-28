import styled from "@emotion/styled";

export default styled.li(props => ({
  alignItems: "flex-start",
  backgroundColor: props.theme.cardBg,
  borderBottomColor: props.theme.checkBorder,
  borderBottomStyle: "solid",
  borderBottomWidth: 1,
  display: "flex",
  fontSize: ".8rem",
  gap: "1em",
  minHeight: "3.25em",
  transitionDuration: props.theme.duration,
  transitionProperty: "background-color, border-bottom-color",
  transitionTimingFunction: props.theme.timeFunction,
  padding: "1.2em 1.875em",
  position: "relative",

  "&:first-of-type": {
    borderTopLeftRadius: ".3125em",
    borderTopRightRadius: ".3125em"
  },

  "&.dragging": {
    opacity: .5,
    cursor: "move !important"
  },

  "&:hover": {
    cursor: "pointer",
    ".cross": {
      opacity: 1
    }
  },

  "p": {
    color: props.checked ? props.theme.fontStroke : props.theme.fontNormal,
    margin: ".3125em 0 0",
    textDecoration: props.checked ? "line-through" : "",
    transition: `color ${props.theme.duration} ${props.theme.timeFunction}`,
    whiteSpace: "pre-wrap",
    width: "75%",
  },

  ".cross": {
    opacity: 0,
    position: "absolute",
    right: "1.875em",
    top: "calc(1.2em + 3px)",
    transform: "scale(.8)",
    transition: "opacity 250ms ease-in-out",
  },

  "@media (min-width:769px)": {
    minHeight: 64,
    padding: "1.35em 1.875em",
    gap: "1.5em",
    ".check": {
      marginTop: 2
    },
    "p": {
      width: "85%",
      fontSize: "1rem"
    },
    ".cross": {
      transform: "scale(1)",
      top: "calc(1.35em + 6px)"
    }
  },
}))