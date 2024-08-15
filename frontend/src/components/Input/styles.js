import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;

  width: 100%;

  border-radius: 10px;
  
  background-color: ${({theme}) => theme.COLORS.BG_700};
  
  padding: 19px 24px;
  > input {
    width: 100%;
    height: 100%;
    border: none; 
    background: transparent;
    color: ${({theme}) => theme.COLORS.WHITE};
    font-size: 16px;  

    &::placeholder {
      color: ${({theme}) => theme.COLORS.GRAY_100};
    }
  }

  > svg {
    font-size: 20px;
    color: ${({theme}) => theme.COLORS.GRAY_100};
    margin-right: 12px;
  }
`;