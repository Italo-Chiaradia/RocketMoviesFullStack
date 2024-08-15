import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 222px;
  padding: 32px;
  margin-bottom: 24px;
  background-color: rgba(255, 133, 155, .05);
  border-radius: 16px;
  
  transition: all .2s;
  cursor: pointer;
  &:hover {
    background-color: rgba(255, 133, 155, .03);
  }

  display: flex;
  flex-direction: column;
  gap: 16px;

  > header {
    > h3 {
      font-size: 24px;
      margin-bottom: 8px;
    }
    > span > svg {
      font-size: 12px;
      color: ${({theme}) => theme.COLORS.PRIMARY};
      margin-right: 6px;
    }
  }
  
`

export const Description = styled.p`
  width: 100%;
  height: 45px;
  overflow: hidden;
`