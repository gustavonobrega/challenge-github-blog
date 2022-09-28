import styled from 'styled-components'
 
export const SearchInputContainer = styled.form`
  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
      font-size: 1.125rem;
      color: ${props => props.theme['base-subtitle']}
    }

    span {
      font-size: 0.875rem;
      color: ${props => props.theme['base-span']}
    }
  }
  
  input {
    width: 100%;
    margin-top: 0.75rem;
    padding: 0.75rem 1rem;
    background: ${props => props.theme['base-input']};
    color: ${props => props.theme['base-text']};
    border: 1px solid ${props => props.theme['base-border']};
    border-radius: 6px;
  
    &::placeholder {
      color: ${props => props.theme['base-label']}
    }
  }
`
