import { render, screen } from '@testing-library/react';
import SampleComponent from '@/app/components/SampleComponent';

describe('SampleComponent', () => {
  it('renders the text correctly', () => {
    render(<SampleComponent />);
    expect(screen.getByText('Hello, Next.js with Jest!')).toBeInTheDocument();
  });
});
