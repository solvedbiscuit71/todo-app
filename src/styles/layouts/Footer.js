import styled from '@emotion/styled';

export default styled.footer(props => ({
  color: props.theme.fontLight,
  fontSize: ".9rem",
  margin: "2.95em 0",
  textAlign: "center",

  "@media (min-width: 769px)": {
    margin: "0 0 3em"
  }
}))