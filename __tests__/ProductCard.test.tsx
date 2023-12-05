import { render, screen } from "@testing-library/react";
import * as nextRouter from "next/router";
import ProductCard from "../pages/card/[productId]";
import React from "react";

describe("Async component", () => {
  test("renders products if request succeeds", async () => {
    global.fetch = jest.fn().mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        products: [
          {
            id: 1,
            category: "Sweets",
            name: "Cake",
            price: 2.88,
            currency: "EUR",
            description: "Pure and tasty",
          },
          {
            id: 2,
            category: "Fruits",
            name: "Banana",
            price: 1.02,
            currency: "EUR",
            description: "Fresh and delicious bananas from Southeast Asia",
          },
        ],
      }),
    });

    const useRouterMock = jest.spyOn(nextRouter, "useRouter");
    useRouterMock.mockImplementation(
      () =>
        ({
          query: { productId: "1" },
        } as any)
    );

    render(<ProductCard />);

    const productDetailsWrapper = await screen.findAllByRole("product-details");
    expect(productDetailsWrapper).toHaveLength(1);
  });
});
