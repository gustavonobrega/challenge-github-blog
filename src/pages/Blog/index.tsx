import { PostCard } from './components/PostCard'
import { Profile } from './components/Profile'
import { SearchInput } from './components/SearchInput'

import { BlogContainer, Posts } from './styles'

export function Blog() {
  return (
    <>
      <Profile />

      <BlogContainer>
        <SearchInput />

        <Posts>
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </Posts>
      </BlogContainer>
    </>
  )
}