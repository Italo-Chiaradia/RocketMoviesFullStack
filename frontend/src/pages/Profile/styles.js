import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-rows: 144px auto;
  grid-template-areas: 
  "header"
  "form";
  > header {
    display: flex;
    align-items: center;
    padding-left: 144px;
    grid-area: header;
    background-color: rgba(255, 133, 155, .05);
    a {
      color: ${({theme}) => theme.COLORS.PRIMARY};
      display: flex;
      align-items: center;
      gap: 8px;
    }
  }

`

export const Form = styled.form`
  grid-area: form;
  
  display: flex;
  flex-direction: column;

  width: 340px;
  margin: -105px auto 0;
  > .input-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  > .input-group + .input-group {
    margin-top: 24px;
  }

`

export const Avatar = styled.div`
  width: 186px;
  height: 186px;
  margin: 0 auto 40px;
  position: relative;
  > img {
    width: 100%;
    border-radius: 50%;
  }
  label {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 0;
    right: 0;
    background-color: ${({theme}) => theme.COLORS.PRIMARY};
    padding: 14px;
    border-radius: 50%;
    cursor: pointer;
    transition: .2s all;
    > svg {
      font-size: 20px;
      color: ${({theme}) => theme.COLORS.GRAY_200};
    }
    &:hover {
      filter: brightness(.9);
    } 
  }
  input {
    display: none;
  }
`