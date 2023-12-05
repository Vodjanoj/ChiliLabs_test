import { fireEvent, render, screen } from "@testing-library/react";
import SearchProducts from "../components/Search/SearchProducts";
import React from "react";

describe('SearchProducts Component', () => {
  test('renders without errors', () => {
    const mockOnChange = jest.fn();
    render(<SearchProducts query="" onChangeQuery={mockOnChange} />);

    const inputElement = screen.getByPlaceholderText('Type to search products by name or category');
    expect(inputElement).toBeInTheDocument();
  });

  test('triggers onChange event with correct value', () => {
    const mockOnChange = jest.fn();
    render(<SearchProducts query="" onChangeQuery={mockOnChange} />);

    const inputElement = screen.getByPlaceholderText('Type to search products by name or category');
    fireEvent.change(inputElement, { target: { value: 'test query' } });

    expect(mockOnChange).toHaveBeenCalledWith(expect.objectContaining({ target: inputElement}));
  });
});

