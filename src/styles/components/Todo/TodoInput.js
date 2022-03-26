import styled from "@emotion/styled";

export default styled.form(props => ({
  minHeight: 48,
  backgroundColor: props.theme.cardBg,
  borderRadius: 5,
  boxShadow: props.theme.darkMode ? "" : "0px 35px 50px -15px rgba(194, 195, 214, 0.5)",
  display: "flex",
  alignItems: "center",
  margin: "1.5em auto 1em",
  width: "min(87.2vw,540px)",
  transition: `background-color ${props.theme.duration} ${props.theme.timeFunction}`,

  "input": {
    color: props.theme.fontNormal,
    caretColor: props.theme.tabActive,
    backgroundColor: props.theme.cardBg,
    transitionProperty: "background-color,color",
    transitionDuration: props.theme.duration,
    transitionTimingFunction: props.theme.timeFunction,
    minHeight: "3em",
    width: "calc(100% - 4.5em)",
    border: "none",
    marginLeft: "calc(2.5em - 22px)",

    "&:hover,&:focus": {
      border: "none",
      outline: "none"
    }
  },
  ".check": {
    marginLeft: "1.5em"
  }
}));