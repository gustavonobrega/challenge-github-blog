import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown'
import { useParams } from 'react-router-dom'
import { api } from '../../lib/axios';

import { PostInfo } from './components/PostInfo'
import { PostContainer } from './styles'

export interface PostType {
  title: string;
  body: string;
  comments: number;
  html_url: string;
  created_at: string;
  user?: {
    login: string;
  };
} 

export function Post() {
  const [post, setPost] = useState<PostType>({} as PostType)
  const { number } = useParams();

  useEffect(() => {
    async function loadPost() {
      const username = "gustavonobrega";
      const repo = "challenge-github-blog";

      const response = await api.get(`repos/${username}/${repo}/issues/${number} `)
    
      setPost(response.data);
    }

    loadPost()
  }, [])

  return (
    <>
      <PostInfo post={post} />

      <PostContainer>
        
        <ReactMarkdown>
          {post.body}
        </ReactMarkdown>

      </PostContainer>
    </>
  )
}