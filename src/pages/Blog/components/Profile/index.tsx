import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";

import { ProfileContainer, ProfileInfos } from './styles'
import { CustomLink } from '../../../../components/CustomLink';

export function Profile() {
  return (
      <ProfileContainer>
        <img src="https://github.com/gustavonobrega.png" alt="" />

        <ProfileInfos>
          <div>
            <strong>Gustavo Nóbrega</strong>
            <CustomLink
              href="https://github.com/gustavonobrega"
              target="_blank"
              text="Github"
              icon={<FontAwesomeIcon icon={faArrowUpRightFromSquare} />}
            />
          </div>

          <p>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. 
            Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.
          </p>

          <ul>
            <li>
              <FontAwesomeIcon icon={faGithub} />
              gustavonobrega
            </li>
            <li>
              <FontAwesomeIcon icon={faBuilding} />
              Rocketseat
            </li>
            <li>
              <FontAwesomeIcon icon={faUserGroup} />
              3 seguidores
            </li>
          </ul>
        </ProfileInfos>
      </ProfileContainer>
  )
}