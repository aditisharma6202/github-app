import { useQuery } from "react-query";


const fetchRepos = async (username: string, page: number, perPage: number) => {
  const response = await fetch(
    `https://api.github.com/search/repositories?q=user:${username}&page=${page}&per_page=${perPage}`
  );
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

export const useRepos = (username: string, page: number, perPage: number) => {
  return useQuery(
    ['repos', username, page],
    () => fetchRepos(username, page, perPage),
    { enabled: !!username }
  );
};
