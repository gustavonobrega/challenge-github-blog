import { AnchorHTMLAttributes, ReactNode } from 'react';

import { CustomLinkContainer } from './styles'

interface CustomLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  text: string;
  icon?: ReactNode;
}

export function CustomLink({ text, icon, ...rest }: CustomLinkProps) {
  return (
    <CustomLinkContainer {...rest} >
      {text}
      {icon}
    </CustomLinkContainer>
  )
}