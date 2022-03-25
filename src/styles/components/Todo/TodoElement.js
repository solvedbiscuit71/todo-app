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
    position: "absolute",
    top: "50%",
    right: "1.875em",
    transform: "translateY(-50%)"
  }
},props => ({
  borderBottomColor: props.theme.gray2,

  "p": {
    textDecoration: props.checked ? "line-through" : "",
    color: props.checked ? props.theme.gray3 : props.theme.gray5
  }
}))