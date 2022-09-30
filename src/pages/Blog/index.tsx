import { useCallback, useEffect, useState } from 'react'
import { api } from '../../lib/axios'
import { PostCard } from './components/PostCard'
import { Profile } from './components/Profile'
import { SearchInput } from './components/SearchInput'

import { BlogContainer, Posts } from './styles'

export interface IPost {
  title: string
  body: string
  number: number
  created_at: string
}

export function Blog() {
  const [posts, setPosts] = useState<IPost[]>([])

  const fetchPosts = useCallback(async (query?: string) => {
    const username = 'gustavonobrega'
    const repo = 'challenge-github-blog'

    const response = await api.get(
      `search/issues?q=${query ?? ''}%20repo:${username}/${repo}`,
    )

    setPosts(response.data.items)
  }, [])

  useEffect(() => {
    fetchPosts()
  }, [fetchPosts])

  return (
    <>
      <Profile />

      <BlogContainer>
        <SearchInput postsLength={posts.length} fetchPosts={fetchPosts} />

        <Posts>
          {posts.map((post) => (
            <PostCard key={post.number} post={post} />
          ))}
        </Posts>
      </BlogContainer>
    </>
  )
}
