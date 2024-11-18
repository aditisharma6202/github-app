import React from 'react';
import RepoItem from './RepoItem';

interface RepoListProps {
  repos: Array<{ name: string; description: string; html_url: string }>;
}

const RepoList: React.FC<RepoListProps> = ({ repos }) => {
  return (
    <div className="space-y-4 mt-6">
      {repos.map((repo) => (
        <RepoItem
          key={repo.name}
          name={repo.name}
          description={repo.description}
          url={repo.html_url}
        />
      ))}
    </div>
  );
};

export default RepoList;
