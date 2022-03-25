import styled from "@emotion/styled";

export default styled.div({
  width: 22,
  height: 22,
  borderWidth: 1.5,
  borderStyle: "solid",
  borderRadius: "50%",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "top 50% left 50%",
},props => ({
  borderColor: props.checked ? "white" : props.theme.gray2,
  backgroundImage: props.checked ? "url('images/icon-check.svg'),linear-gradient(to bottom right,hsl(192, 100%, 67%),hsl(280, 87%, 65%))" : ""
}))