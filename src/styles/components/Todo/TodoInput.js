import styled from "@emotion/styled";

export default styled.form(props => ({
  alignItems: "center",
  backgroundColor: props.theme.cardBg,
  borderRadius: ".3125em",
  boxShadow: props.theme.darkMode ? "" : "0px 35px 50px -15px rgba(194, 195, 214, 0.5)",
  display: "flex",
  margin: "1.5em auto 1em",
  minHeight: "3em",
  transition: `background-color ${props.theme.duration} ${props.theme.timeFunction}`,
  width: "min(87.2vw,540px)",

  "input": {
    backgroundColor: props.theme.cardBg,
    border: "none",
    caretColor: props.theme.tabActive,
    color: props.theme.fontNormal,
    marginLeft: "calc(2.5em - 22px)",
    minHeight: "3em",
    transitionDuration: props.theme.duration,
    transitionProperty: "background-color,color",
    transitionTimingFunction: props.theme.timeFunction,
    width: "75%",

    "&:hover,&:focus": {
      border: "none",
      outline: "none"
    }
  },

  ".check": {
    marginLeft: "1.5em"
  },

  "@media (min-width:769px)": {
    minHeight: "4em",
    "input": {
      fontSize: "1rem",
      marginLeft: "1em",
      width: "85%"
    }
  }
}));