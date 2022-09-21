import { Profile } from './components/Profile'
import { SearchInput } from './components/SearchInput'
import { BlogContainer } from './styles'

export function Blog() {
  return (
    <>
      <Profile />

      <BlogContainer>
        <SearchInput />

      </BlogContainer>
    </>
  )
}