// BioCard.test.tsx
import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';

import { BioCard } from '../src/components/BioCard';

describe('BioCard Component', () => {
  const mockProps = {
    name: 'John Doe',
    link: 'https://example.com/profile',
    description: 'Software Engineer with a passion for React',
    imageUrl: 'https://example.com/profile.jpg',
  };

  it('renders the name as a link with correct URL', () => {
    render(<BioCard {...mockProps} />);

    // Example using stringContaining
    const nameLink = screen.getByText(/John Doe/i);
    expect(nameLink).toBeInTheDocument();
    expect(nameLink.tagName).toBe('A');
    expect(nameLink.getAttribute('href')).toBe('https://example.com/profile');
  });

  it('displays the description text', () => {
    render(<BioCard {...mockProps} />);

    expect(
      screen.getByText('Software Engineer with a passion for React'),
    ).toBeInTheDocument();
  });

  it('renders the image with correct src', () => {
    render(<BioCard {...mockProps} />);

    const image = screen.getByAltText(/John Doe/i);
    expect(image).toBeInTheDocument();
    expect(image.tagName).toBe('IMG');
    expect(image.getAttribute('src')).toBe('https://example.com/profile.jpg');
  });
});
