import styled from '@emotion/styled';

export default styled.div(props => ({
  minHeight: 52,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontSize: "0.8rem",
  padding: "0 1.875em",
  color: props.theme.fontLight,
  transition: `color ${props.theme.duration} ${props.theme.timeFunction}`,

  "div:hover": {
    cursor: 'pointer',
    color: props.theme.fontNormal,
    transition: "color 250ms linear"
  }
}))