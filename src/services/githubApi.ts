import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com/';

export const fetchRepositories = async (username: string, page: number = 1, perPage: number = 10) => {
  const response = await axios.get(`${GITHUB_API_URL}users/${username}/repos`, {
    params: {
      page,
      per_page: perPage,
    },
  });
  return response.data;
};
