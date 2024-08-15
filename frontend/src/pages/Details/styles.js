import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas: 
  "header"
  "content";

  > main {
    grid-area: content;
    height: calc(100vh - 195px);
    overflow-y: auto;
  }
`;

export const Content = styled.main`
  width: 1137px;
  margin: 40px auto;
  padding-right: 16px;
  display: flex;
  flex-direction: column;
  gap: 40px;

  > header {
    display: flex;
    flex-direction: column;
    gap: 24px;
    svg {
      color: ${({theme}) => theme.COLORS.PRIMARY};
    }

    img {
        width: 16px;
        height: 16px;
        border-radius: 50%;
    }

    a {
      display: flex;
      align-items: center;
      gap: 8px;
      color: ${({theme}) => theme.COLORS.PRIMARY}
    }

    .flex-container {
      display: flex;
      align-items: center;
      > .date > svg {
        margin-right: -4px;
        margin-left: 16px;
      }
    }

    .title {
      gap: 20px;
      > h1 {
        font-size: 36px;
        font-weight: 500;
      }
      > .stars-container {
        display: flex;
        align-items: center;
        
        svg {
          font-size: 20px;
          margin-right: 10px;
        }
      }
    }

    .title-link {
      display: flex;
      justify-content: space-between;
    }

    .flex-container:nth-child(3) {
      gap: 8px;

      .createdBy, .date {
        display: flex;
        align-items: center;
        gap: 8px;
      }
     
    }
  }

  p {
    text-align: justify;
  }
`;