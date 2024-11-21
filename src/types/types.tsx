
  export interface RepoData {
    name: string
    description: string
    subscribers_count: number
    stargazers_count: number
    forks_count: number
    homepage: string 
    html_url:string
  }
  export interface GitHubApiResponse {
    items: RepoData[]; 
    total_count: number;
  }