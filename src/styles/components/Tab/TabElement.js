import styled from '@emotion/styled';

export default styled.li(props => ({
  color: props.selected ? "hsl(220, 98%, 61%)" : props.theme.gray4
}))