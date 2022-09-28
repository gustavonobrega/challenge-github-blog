import styled from 'styled-components'
 
export const BlogContainer = styled.div`
  width: 100%;
  margin-top: 4.5rem;
`

export const Posts = styled.div`
  width: 100%;
  margin: 3rem 0;

  display: grid;
  grid-template-columns: repeat(2, minmax(26rem, 1fr));
  grid-gap: 2rem;
`