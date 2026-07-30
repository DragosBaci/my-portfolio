import { render, screen } from '@testing-library/react';
import CustomButton from './CustomButton';

test('renders a mailto link when given an email', () => {
    render(<CustomButton value="CONTACT ME" email="dragos617@yahoo.com" />);

    const link = screen.getByRole('link', { name: /contact me/i });
    expect(link).toHaveAttribute('href', expect.stringContaining('mailto:dragos617@yahoo.com'));
});

test('renders an inert tag without an email', () => {
    render(<CustomButton value="React" />);

    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.queryByRole('link')).not.toBeInTheDocument();
});
