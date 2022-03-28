import styled from "@emotion/styled";

export default styled.header({
  alignItems: "center",
  display: "flex",
  justifyContent: "space-between",
  margin: "12.8vw auto 0em",
  marginTop: "min(12.8vw,4.5em)",
  width: "min(87.2vw,540px)",

  "h1": {
    color: "white",
    fontSize: "2rem",
    letterSpacing: ".25em",
    margin: 0
  },

  "@media (min-width: 769px)": {
    "h1": {
      fontSize: "2.75rem"
    }
  }
});