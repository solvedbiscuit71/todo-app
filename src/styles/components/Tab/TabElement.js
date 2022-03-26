import styled from '@emotion/styled';

export default styled.li(props => ({
  color: props.selected ? `${props.theme.tabActive} !important` : props.theme.fontLight,
  transition: `color ${props.theme.duration} ${props.theme.timeFunction}`,

  "&:hover": {
    cursor: 'pointer',
    color: props.theme.fontNormal
  }
}))