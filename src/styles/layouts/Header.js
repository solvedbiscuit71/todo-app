import styled from "@emotion/styled";

export default styled.header({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  "h1": {
    color: "white",
    fontSize: "2rem",
    letterSpacing: ".25em",
    margin: 0
  },
},props => ({
  margin: props.margin || "3em 1.5em 0em"
}));