import axios from 'axios';
import { GitHubApiResponse } from '../types/types';
 export const getRepositories = async (
  query: string,
  page: number,
  rowsPerPage: number,
  sort:string,order:string
): Promise<GitHubApiResponse> => {
  try {
    const url = `https://api.github.com/search/repositories?q=${query}&page=${page}&per_page=${rowsPerPage}&sort=${sort}&order=${order}`;
    const response = await axios.get<GitHubApiResponse>(url);
    return response.data; 
  } catch (error) {
 
    console.error('Error fetching data:', error);
    throw error; 
  }
};

