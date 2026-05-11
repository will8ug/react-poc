import { render, screen } from '@testing-library/react';
import HelloWorld from './HelloWorld';

describe('HelloWorld', () => {
  it('renders "Hello, World!" by default', () => {
    render(<HelloWorld />);
    expect(screen.getByText('Hello, World!')).toBeInTheDocument();
  });

  it('renders "Hello, {name}!" when name prop is provided', () => {
    render(<HelloWorld name="React" />);
    expect(screen.getByText('Hello, React!')).toBeInTheDocument();
  });
});
