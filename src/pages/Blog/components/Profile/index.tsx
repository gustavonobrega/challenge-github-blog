import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";

import { ProfileContainer, ProfileInfos } from './styles'
import { CustomLink } from '../../../../components/CustomLink';
import { useEffect, useState } from 'react';
import { api } from '../../../../util/axios';

interface ProfileData {
  name: string;
  login: string;
  avatar: string;
  bio: string;
  followers: string;
}

export function Profile() {
  const [profile, setProfile] = useState<ProfileData>();

  useEffect(() => {
    async function loadProfile() {
      const { data } = await api.get('users/gustavonobrega');

      const profile = {
        name: data.name,
        login: data.login,
        avatar: data.avatar_url,
        bio: data.bio,
        followers: data.followers,
      }

      setProfile(profile)
    }

    loadProfile();
  }, [])

  return (
      <ProfileContainer>
        <img src={profile?.avatar} alt="" />

        <ProfileInfos>
          <div>
            <strong>{profile?.name}</strong>
            <CustomLink
              href="https://github.com/gustavonobrega"
              target="_blank"
              text="Github"
              icon={<FontAwesomeIcon icon={faArrowUpRightFromSquare} />}
            />
          </div>

          <p>
          {profile?.bio}
          </p>

          <ul>
            <li>
              <FontAwesomeIcon icon={faGithub} />
              {profile?.login}
            </li>
            <li>
              <FontAwesomeIcon icon={faBuilding} />
              Rocketseat
            </li>
            <li>
              <FontAwesomeIcon icon={faUserGroup} />
              {profile?.followers} seguidores
            </li>
          </ul>
        </ProfileInfos>
      </ProfileContainer>
  )
}