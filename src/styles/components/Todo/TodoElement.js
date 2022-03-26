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
  borderBottomColor: props.theme.checkBorder,
  transition: `border-bottom-color ${props.theme.duration} ${props.theme.timeFunction}`,

  "p": {
    textDecoration: props.checked ? "line-through" : "",
    color: props.checked ? props.theme.fontStroke : props.theme.fontNormal,
    transition: `color ${props.theme.duration} ${props.theme.timeFunction}`,
  }
}))