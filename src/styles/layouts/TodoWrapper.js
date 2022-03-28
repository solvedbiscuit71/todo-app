import styled from "@emotion/styled";

export default styled.div(props => ({
  margin: "1em auto",
  width: "min(87.2vw,540px)",
  backgroundColor: props.theme.cardBg,
  borderRadius: ".3125em",
  boxShadow: props.theme.darkMode ? "" : "0px 2em 3.125em -1em rgba(194, 195, 214, 0.5)",
  transition: `background-color ${props.theme.duration} ${props.theme.timeFunction}`,

  "ul": {
    margin: 0,
    padding: 0,
    listStyle: "none"
  }
}));