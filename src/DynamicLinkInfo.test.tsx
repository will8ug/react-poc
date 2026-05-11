import {fireEvent, render, screen} from '@testing-library/react';

import DynamicLinkInfo from './DynamicLinkInfo';

describe('DynamicLinkInfo', () => {
  it('Should render DynamicLinkInfo component properly', () => {
    render(<DynamicLinkInfo />);

    expect(screen.getByRole('link', { name: 'Alice' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Bob' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Charlie' })).toBeInTheDocument();
  });

  it("Parameter link to Alice should work", () => {
    render(<DynamicLinkInfo />);

    fireEvent.click(screen.getByRole('link', { name: 'Alice' }));
    expect(screen.getByRole('heading', { name: 'Hello, Alice!' })).toBeInTheDocument();
  });

  it("Parameter link to Bob should work", () => {
    render(<DynamicLinkInfo />);

    fireEvent.click(screen.getByRole('link', { name: 'Bob' }));
    expect(screen.getByRole('heading', { name: 'Hello, Bob!' })).toBeInTheDocument();
  });

  it("Parameter link to Charlie should work", () => {
    render(<DynamicLinkInfo />);

    fireEvent.click(screen.getByRole('link', { name: 'Charlie' }));
    expect(screen.getByRole('heading', { name: 'Hello, Charlie!' })).toBeInTheDocument();
  });
});