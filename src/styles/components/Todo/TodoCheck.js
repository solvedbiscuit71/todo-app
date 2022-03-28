import styled from "@emotion/styled";

export default styled.div(props => ({
  width: 22,
  height: 22,
  borderRadius: "50%",
  backgroundRepeat: "no-repeat",
  backgroundColor: props.checked ? "" : props.theme.checkBorder,
  position: "relative",
  "&::after": {
    content: '""',
    width: props.checked ? 22 : 19,
    height: props.checked ? 22 : 19,
    position: "absolute",
    top: props.checked ? 0 : 1.5,
    left: props.checked ? 0 : 1.5,
    borderRadius: "50%",
    backgroundColor: props.theme.cardBg,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top 50% left 50%",
    backgroundImage: props.checked ? props.theme.checkBg : "",
  },
  "&:hover": {
    cursor: "pointer",
    backgroundImage: "linear-gradient(to bottom right,hsl(192, 100%, 67%),hsl(280, 87%, 65%))",
  },

  "@media (min-width:769px)": {
    width: 24,
    height: 24,
    "&::after": {
      width: props.checked ? 24 : 21,
      height: props.checked ? 24 : 21,
    }
  }
}))