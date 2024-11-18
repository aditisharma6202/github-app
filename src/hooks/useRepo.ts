import { useQuery } from 'react-query';
import { fetchRepositories } from '../services/githubApi';

export const useRepos = (username: string, page: number, perPage: number) => {
  return useQuery(
    ['repos', username, page],
    () => fetchRepositories(username, page, perPage),
    { enabled: !!username }  
  );
};