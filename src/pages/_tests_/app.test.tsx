import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "../App";
import * as useRepo from "../../services/useRepo"
import '@testing-library/jest-dom';


jest.mock(".../../services/useRepo");

const mockGetRepositories = useRepo.getRepositories as jest.Mock;

describe("App Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders all components", () => {
    render(<App />);

    // Check if Header is rendered
    expect(screen.getByText('Github-Repo')).toBeInTheDocument();

    // Check if Search component is rendered
    expect(screen.getByPlaceholderText("Enter UserName")).toBeInTheDocument();

    // // Check if Filter component is rendered
    // expect(screen.getByText("Sort")).toBeInTheDocument();

    // // Check if Table component is rendered
    // expect(screen.getByText("Repository")).toBeInTheDocument();
  });

  test("handles user input in the search bar", () => {
    render(<App />);

    const searchInput = screen.getByPlaceholderText("Enter UserName");
    fireEvent.change(searchInput, { target: { value: "testuser" } });

    expect((searchInput as HTMLInputElement).value).toBe("testuser");
  });

  test("fetches data on search", async () => {
    // Mock API response
    mockGetRepositories.mockResolvedValueOnce({
      total_count: 1,
      items: [
        {
          name: "Repo 1",
          description: "Description 1",
          forks_count: 5,
          homepage: "https://homepage1.com",
          stargazers_count: 10,
          html_url: "https://repo1.com",
        },
      ],
    });

    render(<App />);

    const searchInput = screen.getByPlaceholderText("Enter UserName");
    fireEvent.change(searchInput, { target: { value: "testuser" } });

    const searchButton = screen.getByRole('button', { name: /search/i });
    fireEvent.click(searchButton);

    await waitFor(() => {
      expect(mockGetRepositories).toHaveBeenCalledWith(
        "user:testuser",
        1,
        10,
        "",
        "",
      );
    });

    // Check if Table displays the fetched data
    expect(screen.getByText("Repo 1")).toBeInTheDocument();
    expect(screen.getByText("Description 1")).toBeInTheDocument();
  });

  test("handles pagination interaction", async () => {
    render(<App />);
 
  });
});
