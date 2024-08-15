import styled from 'styled-components'

export const Container = styled.textarea`
  width: 100%;
  height: 274px;
  padding: 19px 24px;
  margin-bottom: 40px;
  border: none;
  border-radius: 10px;

  font-size: 16px;
  color: ${({theme}) => theme.COLORS.WHITE};
  &::placeholder {
    color: ${({theme}) => theme.COLORS.GRAY_100};

  }
  resize: none;

  background-color: ${({theme}) => theme.COLORS.BG_700};
`