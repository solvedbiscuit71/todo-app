import styled from '@emotion/styled';

export default styled.li(props => ({
  color: props.selected ? `${props.theme.tabActive} !important` : props.theme.fontLight,
  transition: `color ${props.theme.duration} ${props.theme.timeFunction}`,

  "&:hover": {
    color: props.theme.fontNormal,
    cursor: 'pointer',
    transitionDuration: "200ms"
  }
}))