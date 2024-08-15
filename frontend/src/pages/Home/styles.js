import styled from 'styled-components'

export const Container = styled.div`  
  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas: 
  "header"
  "content";
  
  > main {
    grid-area: content;
  }
`
export const Content = styled.div`
  max-width: 1137px;
  margin: 0 auto;
  padding-top: 50px;

  > header {
    display: flex;
    align-items: center;
    > h2 {
      font-size: 32px;
      font-weight: 400;
    }
    justify-content: space-between;
    margin-bottom: 40px;
  }
  > .preview-container {
    height: calc(100vh - 266px); 
    overflow-y: auto;
    padding-right: 8px;
    
    /* Estilizando a barra de rolagem */
    &::-webkit-scrollbar {
      width: 8px; /* Largura da barra de rolagem */
    }

    &::-webkit-scrollbar-track {
      background: none; /* Cor do track da barra de rolagem */
    }

    &::-webkit-scrollbar-thumb {
      background: ${({theme}) => theme.COLORS.PRIMARY}; /* Cor do polegar da barra de rolagem */
      border-radius: 8px;
    }
    > p {
      color: ${({theme}) => theme.COLORS.GRAY_100};
    }
  }
`
