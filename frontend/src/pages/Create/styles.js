import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas: 
  "header"
  "form";
  > form {
    grid-area: form;
    height: calc(100vh - 116px);
    overflow-y: auto;
  }
`;

export const Form = styled.form`
  > div {
    max-width: 1137px;
    margin: 40px auto;
    
    > header {
      display: flex;
      flex-direction: column;
      gap: 24px;
      margin-bottom: 40px;
      > a {
        display: flex;
        align-items: center;
        gap: 8px;
        color: ${({theme}) => theme.COLORS.PRIMARY}
      }
      > h2 {
        font-size: 36px;
        font-weight: 500;
      }
    }
    .flex-container {
      display: flex;
      gap: 40px;
      margin-bottom: 40px;
    }
    > footer {
      width: 100%;
      display: flex;
      margin-top: 40px;
      gap: 40px;
      > button {
        flex: 1;
      }
    }
  }
`;

export const Section = styled.section`
  > h3 {
    font-size: 20px;
    color: ${({theme}) => theme.COLORS.GRAY_100};
    margin-bottom: 24px;
  }
  .tags-container {
    background-color: ${({theme}) => theme.COLORS.BG_900};
    padding: 16px;
    border-radius: 8px;
    display: flex;
    row-gap: 16px;
    flex-wrap: wrap;
  }
`;