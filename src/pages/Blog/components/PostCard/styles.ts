import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const PostCardContainer = styled(Link)`
  all: unset;
  max-height: 16.25rem;
  padding: 2rem;
  background: ${(props) => props.theme['base-post']};
  border-radius: 10px;
  border: 2px solid ${(props) => props.theme['base-post']};
  cursor: pointer;
  transition: border-color 0.2s;

  &:hover {
    border-color: ${(props) => props.theme['base-label']};
  }

  > div {
    display: flex;
    justify-content: space-between;

    h3 {
      max-width: 17.688rem;
      font-size: 1.25rem;
      color: ${(props) => props.theme['base-title']};
    }

    span {
      margin-top: 0.313rem;
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-span']};
    }
  }

  p {
    margin-top: 1.25rem;
    line-height: 1.625rem;

    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
  }
`
