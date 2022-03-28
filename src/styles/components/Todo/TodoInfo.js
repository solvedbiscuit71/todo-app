import styled from '@emotion/styled';

export default styled.div(props => ({
  alignItems: 'center',
  color: props.theme.fontLight,
  display: 'flex',
  fontSize: "0.8rem",
  justifyContent: 'space-between',
  minHeight: "4.0625em",
  padding: "0 1.875em",
  transition: `color ${props.theme.duration} ${props.theme.timeFunction}`,

  "div:hover": {
    color: props.theme.fontNormal,
    cursor: 'pointer',
    transition: "color 250ms linear"
  }
}))