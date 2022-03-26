import styled from "@emotion/styled";

export default styled.div({
  width: 22,
  height: 22,
  borderWidth: 1.5,
  borderStyle: "solid",
  borderRadius: "50%",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "top 50% left 50%",
  "@media (min-width:769px)": {
    width: 24,
    height: 24
  }
},props => ({
  borderColor: props.checked ? props.theme.cardBg : props.theme.checkBorder,
  transition: `border-color ${props.theme.duration} ${props.theme.timeFunction}`,
  backgroundImage: props.checked ? props.theme.checkBg : "",
}))