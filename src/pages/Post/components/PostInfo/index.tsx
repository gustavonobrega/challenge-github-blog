import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faCalendarDay, faComment } from '@fortawesome/free-solid-svg-icons'
import { CustomLink } from '../../../../components/CustomLink'
import { PostInfoContainer} from './styles'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export function PostInfo() {
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
            href="https://github.com/gustavonobrega"
            target="_blank"
            text="Ver No Github"
            icon={<FontAwesomeIcon icon={faArrowUpRightFromSquare} />}
          />
        </div>
        
        <h2>JavaScript data types and data structures</h2>
      
        <ul>
          <li>
            <FontAwesomeIcon icon={faGithub} />
            gustavonobrega
          </li>
          <li>
            <FontAwesomeIcon icon={faCalendarDay} />
            Há 1 dia
          </li>
          <li>
            <FontAwesomeIcon icon={faComment} />
            5 comentários
          </li>
        </ul>
      </PostInfoContainer>
  )
}