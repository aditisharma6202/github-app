import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom"; 
import MuiTable from "../Table";
import userEvent from "@testing-library/user-event";
describe("MuiTable", () => {
  const mockSetCurrentPage = jest.fn();
  const mockSetRowsPerPage = jest.fn();

  const mockData = [
    {
      name: "Repo 1",
      description: "Description 1",
      forks_count: 10,
      homepage: "https://repo1.com",
      stargazers_count: 100,
      subscribers_count: 0,
      html_url: "https://github.com/repo1",
    },
    {
      name: "Repo 2",
      description: "Description 2",
      forks_count: 20,
      homepage: "https://repo2.com",
      stargazers_count: 200,
      subscribers_count: 0,
      html_url: "https://github.com/repo2",
    },
    {
        name: "Repo 3",
        description: "Description 1",
        forks_count: 10,
        homepage: "https://repo1.com",
        stargazers_count: 100,
        subscribers_count: 0,
        html_url: "https://github.com/repo1",
      },
      {
        name: "Repo 4",
        description: "Description 2",
        forks_count: 20,
        homepage: "https://repo2.com",
        stargazers_count: 200,
        subscribers_count: 0,
        html_url: "https://github.com/repo2",
      },
      {
        name: "Repo 5",
        description: "Description 1",
        forks_count: 10,
        homepage: "https://repo1.com",
        stargazers_count: 100,
        subscribers_count: 0,
        html_url: "https://github.com/repo1",
      },
      {
        name: "Repo 6",
        description: "Description 2",
        forks_count: 20,
        homepage: "https://repo2.com",
        stargazers_count: 200,
        subscribers_count: 0,
        html_url: "https://github.com/repo2",
      },    {
        name: "Repo 7",
        description: "Description 1",
        forks_count: 10,
        homepage: "https://repo1.com",
        stargazers_count: 100,
        subscribers_count: 0,
        html_url: "https://github.com/repo1",
      },
      {
        name: "Repo 8",
        description: "Description 2",
        forks_count: 20,
        homepage: "https://repo2.com",
        stargazers_count: 200,
        subscribers_count: 0,
        html_url: "https://github.com/repo2",
      },    {
        name: "Repo 9",
        description: "Description 1",
        forks_count: 10,
        homepage: "https://repo1.com",
        stargazers_count: 100,
        subscribers_count: 0,
        html_url: "https://github.com/repo1",
      },
      {
        name: "Repo 11",
        description: "Description 2",
        forks_count: 20,
        homepage: "https://repo2.com",
        stargazers_count: 200,
        subscribers_count: 0,
        html_url: "https://github.com/repo2",
      },    {
        name: "Repo 12",
        description: "Description 1",
        forks_count: 10,
        homepage: "https://repo1.com",
        stargazers_count: 100,
        subscribers_count: 0,
        html_url: "https://github.com/repo1",
      },
      {
        name: "Repo 13",
        description: "Description 2",
        forks_count: 20,
        homepage: "https://repo2.com",
        stargazers_count: 200,
        subscribers_count: 0,
        html_url: "https://github.com/repo2",
      },    {
        name: "Repo 14",
        description: "Description 1",
        forks_count: 10,
        homepage: "https://repo1.com",
        stargazers_count: 100,
        subscribers_count: 0,
        html_url: "https://github.com/repo1",
      },
      {
        name: "Repo 15",
        description: "Description 2",
        forks_count: 20,
        homepage: "https://repo2.com",
        stargazers_count: 200,
        subscribers_count: 0,
        html_url: "https://github.com/repo2",
      },    {
        name: "Repo 16",
        description: "Description 1",
        forks_count: 10,
        homepage: "https://repo1.com",
        stargazers_count: 100,
        subscribers_count: 0,
        html_url: "https://github.com/repo1",
      },
      {
        name: "Repo 17",
        description: "Description 2",
        forks_count: 20,
        homepage: "https://repo2.com",
        stargazers_count: 200,
        subscribers_count: 0,
        html_url: "https://github.com/repo2",
      },    {
        name: "Repo 18",
        description: "Description 1",
        forks_count: 10,
        homepage: "https://repo1.com",
        stargazers_count: 100,
        subscribers_count: 0,
        html_url: "https://github.com/repo1",
      },
      {
        name: "Repo 19",
        description: "Description 2",
        forks_count: 20,
        homepage: "https://repo2.com",
        stargazers_count: 200,
        subscribers_count: 0,
        html_url: "https://github.com/repo2",
      },    {
        name: "Repo 20",
        description: "Description 1",
        forks_count: 10,
        homepage: "https://repo1.com",
        stargazers_count: 100,
        subscribers_count: 0,
        html_url: "https://github.com/repo1",
      },
      {
        name: "Repo 21",
        description: "Description 2",
        forks_count: 20,
        homepage: "https://repo2.com",
        stargazers_count: 200,
        subscribers_count: 0,
        html_url: "https://github.com/repo2",
      },    {
        name: "Repo 22",
        description: "Description 1",
        forks_count: 10,
        homepage: "https://repo1.com",
        stargazers_count: 100,
        subscribers_count: 0,
        html_url: "https://github.com/repo1",
      },
      {
        name: "Repo 23",
        description: "Description 2",
        forks_count: 20,
        homepage: "https://repo2.com",
        stargazers_count: 200,
        subscribers_count: 0,
        html_url: "https://github.com/repo2",
      },    {
        name: "Repo 24",
        description: "Description 1",
        forks_count: 10,
        homepage: "https://repo1.com",
        stargazers_count: 100,
        subscribers_count: 0,
        html_url: "https://github.com/repo1",
      },
      {
        name: "Repo 25",
        description: "Description 2",
        forks_count: 20,
        homepage: "https://repo2.com",
        stargazers_count: 200,
        subscribers_count: 0,
        html_url: "https://github.com/repo2",
      },
  ];

  const mockCount = 22; // Updated to simulate multiple pages

  it("renders the table with data", () => {
    render(
      <MuiTable
        data={mockData}
        count={mockCount}
        page={0}
        rowsPerPage={10}
        setCurrentPage={mockSetCurrentPage}
        setRowsPerPage={mockSetRowsPerPage}
      />
    );

    // Table headers
    expect(screen.getByText("Repository")).toBeInTheDocument();
    expect(screen.getByText("Description")).toBeInTheDocument();

    // Data rows
    expect(screen.getAllByText("Repo 1").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Repo 2").length).toBeGreaterThan(0);
  });

  it("handles pagination interactions", async () => {
    render(
      <MuiTable
        data={mockData}
        count={mockCount}
        page={0}
        rowsPerPage={10}
        setCurrentPage={mockSetCurrentPage}
        setRowsPerPage={mockSetRowsPerPage}
      />
    );

    // Simulate clicking the next page button
    const nextPageButton = screen.getByRole("button", { name: /next/i });
    fireEvent.click(nextPageButton);

    await waitFor(() => expect(mockSetCurrentPage).toHaveBeenCalledWith(1));

    // Simulate changing rows per page
    const rowsPerPageSelect = screen.getByRole("combobox");
    await userEvent.click(rowsPerPageSelect);


  });
});
