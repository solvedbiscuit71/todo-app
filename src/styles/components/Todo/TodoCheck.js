import styled from "@emotion/styled";

export default styled.div(props => ({
  backgroundColor: props.checked ? "" : props.theme.checkBorder,
  backgroundRepeat: "no-repeat",
  borderRadius: "50%",
  height: 22,
  position: "relative",
  transition: `background-color ${props.theme.duration} ${props.theme.timeFunction}`,
  width: 22,

  "&:hover": {
    backgroundImage: "linear-gradient(to bottom right,hsl(192, 100%, 67%),hsl(280, 87%, 65%))",
    cursor: "pointer",
  },

  "&::after": {
    backgroundColor: props.theme.cardBg,
    backgroundImage: props.checked ? props.theme.checkBg : "",
    backgroundPosition: "top 50% left 50%",
    backgroundRepeat: "no-repeat",
    borderRadius: "50%",
    content: '""',
    height: props.checked ? 22 : 19,
    left: props.checked ? 0 : 1.5,
    position: "absolute",
    top: props.checked ? 0 : 1.5,
    transition: `background-color ${props.theme.duration} ${props.theme.timeFunction}`,
    width: props.checked ? 22 : 19,
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