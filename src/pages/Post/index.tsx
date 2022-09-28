import ReactMarkdown from 'react-markdown'
import { useParams } from 'react-router-dom'

import { PostInfo } from './components/PostInfo'
import { PostContainer } from './styles'

export function Post() {
  const { number } = useParams();

  console.log(number);

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