import {screen, render, fireEvent} from "@testing-library/react";

import Starter from "./Starter.tsx";
import {expect} from "vitest";

describe('Starter', () => {
  it('Should render navigation and home view by default', () => {
    render(<Starter/>);

    expect(screen.getByRole('link', {name: 'Home'})).toBeInTheDocument();
    expect(screen.getByRole('link', {name: 'About'})).toBeInTheDocument();
    expect(screen.getByRole('link', {name: 'Contact'})).toBeInTheDocument();

    expect(screen.getByRole('heading', {name: 'Home Page'})).toBeInTheDocument();
  });

  it('About link should work', () => {
    render(<Starter/>);

    fireEvent.click(screen.getByRole('link', {name: 'About'}));

    expect(screen.getByRole('heading', {name: 'About Page'})).toBeInTheDocument();
  });

  it('Contact link should work', () => {
    render(<Starter/>);

    fireEvent.click(screen.getByRole('link', {name: 'Contact'}));

    expect(screen.getByRole('heading', {name: 'Contact Page'})).toBeInTheDocument();
  });
});
