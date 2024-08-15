import styled from 'styled-components'
import background from '../../assets/background.png'
export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`
export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 136px;
  > div {
    max-width: 342px;
    > div + div {
    margin-top: 8px;
  }
  }
  h1 {
    font-size: 48px;
    color: ${({theme}) => theme.COLORS.PRIMARY};
    line-height: 1.2
  }
  p {
    font-size: 14px;
    color: ${({theme}) => theme.COLORS.GRAY_100};
  }
  h2 {
    margin-block: 48px;
  }
  button {
    width: 100%;
    margin-top: 24px;
    margin-bottom: 42px;
  }
  a {
    display: block;
    text-align: center;
    color: ${({theme}) => theme.COLORS.PRIMARY};
  }
`

export const Background = styled.div`
  flex: 1;
  background: url(${background}) no-repeat center center;
  background-size: cover;
`