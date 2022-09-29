import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faCalendarDay, faComment } from '@fortawesome/free-solid-svg-icons'
import { CustomLink } from '../../../../components/CustomLink'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { PostType } from '../..'

import { PostInfoContainer} from './styles'

interface PostInfoProps {
  post: PostType;
}

export function PostInfo({ post }: PostInfoProps) {
  return (
      <PostInfoContainer>
        <div>
          <CustomLink 
            href="/"
            text="Voltar"
            icon={<FontAwesomeIcon icon={faChevronLeft} />}
            variant="reverseIcon"
          />
          <CustomLink 
            href={post.html_url}
            target="_blank"
            text="Ver No Github"
            icon={<FontAwesomeIcon icon={faArrowUpRightFromSquare} />}
          />
        </div>
        
        <h2>{post.title}</h2>
      
        <ul>
          <li>
            <FontAwesomeIcon icon={faGithub} />
            {post.user?.login}
          </li>
          <li>
            <FontAwesomeIcon icon={faCalendarDay} />
            {post.created_at}
          </li>
          <li>
            <FontAwesomeIcon icon={faComment} />
            {post.comments} comentários
          </li>
        </ul>
      </PostInfoContainer>
  )
}