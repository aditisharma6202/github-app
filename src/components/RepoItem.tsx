import React from 'react';

interface RepoItemProps {
  name: string;
  description: string;
  url: string;
}

const RepoItem: React.FC<RepoItemProps> = ({ name, description, url }) => {
  return (
    <div className="border-b pb-4">
      <h3 className="text-xl font-semibold text-blue-600">
        <a href={url} target="_blank" rel="noopener noreferrer" className="hover:underline">
          {name}
        </a>
      </h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default RepoItem;

