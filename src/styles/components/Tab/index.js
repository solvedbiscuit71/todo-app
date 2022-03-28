import styled from '@emotion/styled';

export default styled.ul(props => ({
  alignItems: 'center',
  backgroundColor: props.theme.cardBg,
  borderRadius: ".3125em",
  boxShadow: props.theme.darkMode ? "" : "0 2em 3.125em -1em rgba(194, 195, 214, 0.5)",
  display: 'flex',
  gap: "1.25em",
  justifyContent: 'center',
  listStyle: "none",
  margin: "0 auto",
  minHeight: "3em",
  padding: 0,
  transition: `background-color ${props.theme.duration} ${props.theme.timeFunction}`,
  width: "min(87.2vw,540px)",
  
  "@media (min-width: 769px)": {
    backgroundColor: "transparent",
    fontSize: ".9rem",
    position: "relative",
    top: "-4.6em",
    width: "fit-content",
  }
}));