import { render, screen } from "@testing-library/react";
import Home from "../page";

describe("Dashboard page", () => {
  it("shows the primary sections", () => {
    render(<Home />);
    expect(screen.getByText(/Top Performing Podcasts/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Top Podcasters/i)[0]).toBeInTheDocument();
    expect(screen.getByText(/Episode for Jun 05, 2022/i)).toBeInTheDocument();
  });
});
