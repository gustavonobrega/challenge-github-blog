import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { IPost } from '../..'
import { PostCardContainer } from './styles'

interface PostCardProps {
  post: IPost
}

export function PostCard({ post }: PostCardProps) {
  return (
    <PostCardContainer to={`/post/${post.number}`}>
      <div>
        <h3>{post.title}</h3>
        <span>
          {formatDistanceToNow(new Date(post.created_at), {
            addSuffix: true,
            locale: ptBR,
          })}
        </span>
      </div>

      <p>{post.body}</p>
    </PostCardContainer>
  )
}
