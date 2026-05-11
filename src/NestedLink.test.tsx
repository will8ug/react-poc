import {screen, render, fireEvent} from "@testing-library/react";

import NestedLink from "./NestedLink.tsx";
import {expect} from "vitest";

describe('NestedLink', () => {
  it('Should render navigation and home view by default', () => {
    render(<NestedLink />);

    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Products' })).toBeInTheDocument();

    expect(screen.getByRole('heading', {name: 'Home Page'})).toBeInTheDocument();
  });

  it('Should navigate to products when the Products link is clicked', () => {
    render(<NestedLink />);

    fireEvent.click(screen.getByRole('link', { name: 'Products' }));

    expect(screen.getByRole('heading', {name: 'Products Page'})).toBeInTheDocument();
  });

  it('Products page should contain routes to Cars', () => {
    render(<NestedLink />);

    fireEvent.click(screen.getByRole('link', { name: 'Products' }));
    fireEvent.click(screen.getByRole('link', { name: 'Cars' }));

    expect(screen.getByRole('heading', {name: 'Cars'})).toBeInTheDocument();
    expect(screen.getByRole('list')).toBeInTheDocument();

    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(3);
    expect(listItems[0]).toHaveTextContent('Tesla');
    expect(listItems[1]).toHaveTextContent('Audi');
    expect(listItems[2]).toHaveTextContent('BMW');
  });

  it('Products page should contain routes to Bikes', () => {
    render(<NestedLink />);

    fireEvent.click(screen.getByRole('link', { name: 'Products' }));
    fireEvent.click(screen.getByRole('link', { name: 'Bikes' }));

    expect(screen.getByRole('heading', {name: 'Bikes'})).toBeInTheDocument();
    expect(screen.getByRole('list')).toBeInTheDocument();

    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(3);
    expect(listItems[0]).toHaveTextContent('Yamaha');
    expect(listItems[1]).toHaveTextContent('Honda');
    expect(listItems[2]).toHaveTextContent('Suzuki');
  });
});
