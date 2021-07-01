import { render, screen } from '@testing-library/react';
import Apply from './Apply';

test('renders learn react link', () => {
  render(<Apply />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
