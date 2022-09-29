import styled from 'styled-components'

export const PostContainer = styled.div`
  margin: 2.5rem 0;
  padding: 0 2rem;

  h1,
  h2 {
    margin-bottom: 2rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid ${(props) => props.theme['base-border']};
  }

  p {
    margin: 1rem 0;
  }

  a {
    color: ${(props) => props.theme.blue};
  }

  ul {
    margin-left: 2rem;
    margin-bottom: 1rem;
  }

  img {
    max-width: 50rem;
  }
`
