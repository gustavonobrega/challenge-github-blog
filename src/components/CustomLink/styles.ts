import styled, { css } from 'styled-components'

interface CustomLinkContainerProps {
  variant?: 'reverseIcon'
}

export const CustomLinkContainer = styled.a<CustomLinkContainerProps>`
  height: 1.188rem;

  font-size: 0.75rem;
  font-weight: bold;
  color: ${(props) => props.theme.blue};
  text-decoration: none;
  text-transform: uppercase;
  border-bottom: 1px solid transparent;
  transition: all 0.2s;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    border-color: ${(props) => props.theme.blue};
  }

  ${(props) =>
    props.variant === 'reverseIcon' &&
    css`
      flex-direction: row-reverse;
    `}
`
