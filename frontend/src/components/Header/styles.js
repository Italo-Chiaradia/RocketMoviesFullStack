import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Container = styled.header`
  grid-area: header;

  display: flex;
  height: 116px;
  padding: 0 120px;
  align-items: center;
  gap: 64px;
  border-bottom: 1px solid ${({theme}) => theme.COLORS.GRAY_200};
  > h1 {
    font-size: 24px;
    color: ${({theme}) => theme.COLORS.PRIMARY}
  }
  > div > input {
    font-size: 14px;
  }
`;

export const Profile = styled.div`
  display: flex;
  gap: 8px;

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    font-size: 14px;
    color: ${({theme}) => theme.COLORS.WHITE};
    
    > strong {
      white-space: nowrap;
    }
    > span {
      color: ${({theme}) => theme.COLORS.GRAY_100};
      cursor: pointer;
    }
    > span:hover {
      filter: brightness(1.5);
    }
  }

  `;

export const ProfileImg = styled(Link) `
  > img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }
`