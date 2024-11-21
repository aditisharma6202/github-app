import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Paper,
  Link,
} from "@mui/material";
import { RepoData } from "../types/types";

function MuiTable({ data, count,setCurrentPage, page ,setRowsPerPage,rowsPerPage}: { data: any; setCurrentPage: any , page:number,setRowsPerPage:any,rowsPerPage:any, count:number}) {


  const [rowData, setRowData] = useState<RepoData[]>([]);
  useEffect(() => {
    const filteredData = data.map((repo: any) => ({
      name: repo.name,
      description: repo.description || "No description",
      forks_count: repo.forks_count,
      homepage: repo.homepage,
      stargazers_count: repo.stargazers_count,
      html_url: repo.html_url,
    }));
    setRowData(filteredData);
  }, [data]);

  const handleChangePage = (_: unknown, newPage: number) => {
    setCurrentPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setCurrentPage(0);
  };

  const columns = [
    { label: "Repository", field: "name" },
    { label: "Description", field: "description" },
    { label: "Fork Count", field: "forks_count" },
    { label: "Homepage Url", field: "homepage" },
    { label: "Stars", field: "stargazers_count" },
    { label: "Link", field: "html_url" },
  ];



  return (
    <Paper>
      <TableContainer className="rounded-md">
        <Table>
          <TableHead className="bg-gray-700 ">
            <TableRow>
              {columns.map((col) => (
                <TableCell key={col.field} className="!text-white">{col.label}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rowData.map((repo, index) => (
              <TableRow key={repo.name + index}>
                <TableCell>{repo.name}</TableCell>
                <TableCell>{repo.description}</TableCell>
                <TableCell>{repo.forks_count}</TableCell>
                <TableCell>
                  {repo.homepage? (
                    <Link href={repo.homepage} target="_blank" rel="noopener">
                      Homepage
                    </Link>
                  ) : (
                    "No Link"
                  )}
                </TableCell>
                <TableCell>{repo.stargazers_count}</TableCell>
                <TableCell>
                  <Link href={repo.html_url} target="_blank" rel="noopener">
                    View Repo
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 20, 30]}
        component="div"
        count={count}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

export default MuiTable;
