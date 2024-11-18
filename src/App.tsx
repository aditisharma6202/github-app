import React, { useState } from 'react';
import SearchForm from './components/SearchForm';
import { useRepos } from './hooks/useRepo';
import RepoList from './components/RepoList';
import Pagination from './components/Pagination';


const App: React.FC = () => {
  const [username, setUsername] = useState('');
  const [page, setPage] = useState(1);
  const perPage = 10;

  const { data, isLoading, isError } = useRepos(username, page, perPage);

  const handleSearch = (username: string) => {
    setUsername(username);
    setPage(1);
  };

  const handlePageChange = (newPage: number) => setPage(newPage);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <SearchForm onSearch={handleSearch} />
      {isLoading && <p className="text-center mt-4">Loading...</p>}
      {isError && <p className="text-center text-red-500 mt-4">Error fetching repositories!</p>}
      {data && (
        <>
          <RepoList repos={data.items} />
          <Pagination
            currentPage={page}
            totalPages={Math.ceil(data.total_count / perPage)}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </div>
  );
};

export default App;
