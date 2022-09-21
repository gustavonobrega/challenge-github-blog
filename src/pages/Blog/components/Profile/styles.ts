import styled from 'styled-components'
 
export const ProfileContainer = styled.div`
  width: 100%;
  padding: 2rem;
  border-radius: 10px;
  background: ${props => props.theme['base-profile']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  display: flex;
  gap: 2rem;

  img {
    height: 9.25rem;
    width: 9.25rem;
    border-radius: 8px;
  }
`

export const ProfileInfos = styled.div`
  > div {
    display: flex;
    justify-content: space-between;

    strong {
      font-size: 1.5rem;
      color: ${props => props.theme['base-title']}
    }

    /* a {
      height: 1.188rem;

      font-size: 0.75rem;
      font-weight: bold;
      color: ${props => props.theme.blue};
      text-decoration: none;
      text-transform: uppercase;
      border-bottom: 1px solid transparent;
      transition: all 0.2s;

      display: flex;
      align-items: center;
      gap: 0.5rem;

      &:hover {
        border-color: ${props => props.theme.blue};
      }
    } */
  }

  p {
    margin-top: 0.5rem;
    line-height: 160%;
  }

  ul {
    margin-top: 1.5rem;

    display: flex;
    align-items: center;
    gap: 1.5rem;

    li {
      display: flex;
      align-items: center;
      gap: 0.531rem;

      color: ${props => props.theme['base-subtitle']};

      svg {
        width: 1.125rem;
        height: 1.125rem;
        color: ${props => props.theme['base-label']}
      }
    }
  }
`