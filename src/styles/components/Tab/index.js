import styled from '@emotion/styled';

export default styled.ul(props => ({
  minHeight: 48,
  backgroundColor: props.theme.cardBg,
  transition: `background-color ${props.theme.duration} ${props.theme.timeFunction}`,
  borderRadius: 5,
  boxShadow: props.theme.darkMode ? "" : "0px 35px 50px -15px rgba(194, 195, 214, 0.5)",
  margin: "0 auto",
  width: "min(87.2vw,540px)",
  padding: 0,

  listStyle: "none",
  display: 'flex',
  gap: 20,
  justifyContent: 'center',
  alignItems: 'center'
}));