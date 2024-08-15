import styled from 'styled-components'

export const Container = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  background-color: ${({theme, isNew}) => isNew? 'transparent' : theme.COLORS.BG_700};
  border: ${({theme, isNew}) => isNew? `2px dashed ${theme.COLORS.GRAY_100}` : `none`};
  padding: 16px;
  border-radius: 10px;
  margin-right: 8px;
  
  input {
    background: transparent;
    border: none;
    color: ${props => (props.isNew ? props.theme.COLORS.GRAY_100 : props.theme.COLORS.WHITE)};
    font-size: 16px;
    outline: none;
    width: auto; /* Ocupar a largura do conteúdo */
    
  }

  button {
    background: none;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 8px;
    cursor: pointer;

    &.button-add, &.button-delete {
      color: ${({theme}) => theme.COLORS.PRIMARY};
    }
  }
`