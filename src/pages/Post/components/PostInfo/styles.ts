import styled from 'styled-components'

export const PostInfoContainer = styled.div`
  width: 100%;
  padding: 2rem;
  border-radius: 10px;
  background: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  > div {
    display: flex;
    justify-content: space-between;
  }

  h2 {
    margin-top: 1.5rem;
    color: ${(props) => props.theme['base-title']};
  }

  ul {
    margin-top: 0.5rem;
    list-style: none;

    display: flex;
    align-items: center;
    gap: 2rem;

    li {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: ${(props) => props.theme['base-span']};

      svg {
        width: 1.125rem;
        height: 1.125rem;
        color: ${(props) => props.theme['base-label']};
      }
    }
  }
`
