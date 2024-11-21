
import Header from "../components/Header";
import { useEffect, useState } from "react";
import Search from "../components/Search";
import { getRepositories } from "../services/useRepo";
import Table from "../components/Table";
import { RepoData } from "../types/types";
import Filter from "../components/Filter";


function App() {
  const [username, setUsername] = useState('');
  const [page, setCurrentPage] = useState(0);
  const [sort, setSort] = useState('');
  const [order, setOrder] = useState('');
  const [filters, setFilters] = useState('');
  const [allData, setAllData] = useState<RepoData[]>([]);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [count, setCount] = useState(0);

  const fetchData = async () => {
    try {
      let nonEncodedQuery = `user:${username}`;
      if (filters) {
        const formattedFilters = filters.split(' ').join('+');
        nonEncodedQuery += `+${formattedFilters}`;
      }
      const data = await getRepositories(nonEncodedQuery, page + 1, rowsPerPage,sort,order);
      setAllData(data?.items ?? []);
      setCount(data?.total_count ?? 0);
    } catch (error) {
      console.error('Failed to fetch data', error);
    }
  };

  useEffect(() => {
    if (username) {
      fetchData();
    }
  }, [page, rowsPerPage])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value)
  }
  const handleSearch = () => {
    fetchData()
  }

  return (
    <div className="bg-gray-100 h-screen w-screen">
      <Header />
      <div className="p-4 flex justify-center items-center">
        <Search value={username} handleChange={handleChange} handleSearch={handleSearch} />
      </div>
      <div className="p-4 flex justify-center items-center">
        <Filter sort={sort} setSort={setSort} order={order} setOrder={setOrder} filters={filters} setFilters={setFilters} onApplyFilters={handleSearch} />
      </div>
      <div className="p-5">
        <Table
          data={allData}
          count={count}
          setCurrentPage={setCurrentPage}
          page={page}
          rowsPerPage={rowsPerPage}
          setRowsPerPage={setRowsPerPage}
        />
      </div>
    </div>
  );
}

export default App;
