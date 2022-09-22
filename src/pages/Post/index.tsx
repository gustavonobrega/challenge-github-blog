import ReactMarkdown from 'react-markdown'

import { PostInfo } from './components/PostInfo'
import { PostContainer } from './styles'

export function Post() {
  return (
    <>
      <PostInfo />

      <PostContainer>
        
        <ReactMarkdown>
          ## Markdown Content
        </ReactMarkdown>

      </PostContainer>
    </>
  )
}