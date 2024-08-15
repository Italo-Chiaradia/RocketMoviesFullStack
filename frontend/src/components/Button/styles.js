import styled from 'styled-components'

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.5px;
  > svg {
    font-size: 24px;
  }
  height: 48px;
  background-color: ${({theme}) => theme.COLORS.PRIMARY};
  border: none;
  padding: 12px 32px;
  border-radius: 10px;
  &:disabled {
    background-color: rgba(255, 133, 155, .4);
    color: ${({theme}) => theme.COLORS.BG_800}
  }
  &.remove-btn {
    color: ${({theme}) => theme.COLORS.PRIMARY};
    background-color: ${({theme}) => theme.COLORS.BG_900};
  }
`