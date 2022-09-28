import { useForm } from 'react-hook-form';
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { SearchInputContainer } from './styles'

interface SearchInputProps {
  postsLength: number;
  fetchPosts: (query: string) => Promise<void>;
}

const searchInputSchema = zod.object({
  query: zod.string(),
})

type SearchFormInput = zod.infer<typeof searchInputSchema>

export function SearchInput({ postsLength, fetchPosts }: SearchInputProps) {
  const { register, handleSubmit } = useForm<SearchFormInput>({
    resolver: zodResolver(searchInputSchema)
  });

  async function handleSearchPosts(data: SearchFormInput) {
    await fetchPosts(data.query);
  }

  return (
    <SearchInputContainer onSubmit={handleSubmit(handleSearchPosts)} >
      <div>
        <strong>Publicações</strong>
        <span>{postsLength} publicações</span>
      </div>

      <input 
        type="text" 
        placeholder="Buscar conteúdo"
        {...register('query')}
      />
    </SearchInputContainer>
  )
}