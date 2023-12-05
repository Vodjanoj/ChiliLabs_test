import { render, screen, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import ProductCard from "../pages/card/[productId]";
import React from "react";

// Import next-test-utils
import { mockNextRouter } from "next-test-utils";

 mockNextRouter();

jest.mock("../Utils/fetchProducts", () => ({
  fetchProducts: jest.fn(() =>
    Promise.resolve({
      products: [
        {
          id: 1,
          category: "Sweets",
          name: "Cake",
          price: 3.99,
          currency: "EUR",
          description: "The cake is a triumph of sugar and flour",
        },
      ],
    })
  ),
}));

describe("ProductCard component", () => {
  it("renders loading state initially", async () => {
    render(<ProductCard />);

    expect(screen.getByText(/loading products/i)).toBeInTheDocument();

    await waitFor(() =>
      expect(screen.queryByText(/loading products/i)).not.toBeInTheDocument()
    );
  });
});