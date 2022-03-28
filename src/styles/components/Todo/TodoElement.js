import styled from "@emotion/styled";

export default styled.li({
  minHeight: 52,
  display: "flex",
  gap: "1em",
  alignItems: "flex-start",
  fontSize: ".8rem",

  borderBottomWidth: 1,
  borderBottomStyle: "solid",
  padding: "1.2em 1.875em",
  "&.dragging": {
    opacity: .5,
    cursor: "move !important"
  },
  "&:first-of-type": {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5
  },
  "p": {
    margin: "5px 0 0",
    width: "75%",
    whiteSpace: "pre-wrap",
  },
  position: "relative",
  ".cross": {
    opacity: 0,
    transition: "opacity 250ms ease-in-out",
    position: "absolute",
    top: "calc(1.2em + 3px)",
    right: "1.875em",
    transform: "scale(.8)"
  },

  "&:hover": {
    cursor: "pointer",
    ".cross": {
      opacity: 1
    }
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

  }
},props => ({
  backgroundColor: props.theme.cardBg,
  borderBottomColor: props.theme.checkBorder,
  transitionProperty: "background-color, border-bottom-color",
  transitionDuration: props.theme.duration,
  transitionTimingFunction: props.theme.timeFunction,

  "p": {
    textDecoration: props.checked ? "line-through" : "",
    color: props.checked ? props.theme.fontStroke : props.theme.fontNormal,
    transition: `color ${props.theme.duration} ${props.theme.timeFunction}`,
  }
}))