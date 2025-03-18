// BioCard.test.tsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BioCard } from '../src/components/BioCard';

describe('BioCard Component', () => {
  const mockProps = {
    name: 'John Doe',
    link: 'https://example.com/profile',
    description: 'Software Engineer with a passion for React',
    imageUrl: 'https://example.com/profile.jpg'
  };

  it('renders the name as a link with correct URL', () => {
    render(<BioCard {...mockProps} />);
    
    const nameLink = screen.getByText('John Doe');
    expect(nameLink).toBeInTheDocument();
    expect(nameLink.tagName).toBe('A');
    expect(nameLink.getAttribute('href')).toBe('https://example.com/profile');
  });

  it('displays the description text', () => {
    render(<BioCard {...mockProps} />);
    
    expect(screen.getByText('Software Engineer with a passion for React')).toBeInTheDocument();
  });

  it('renders the image with correct src', () => {
    render(<BioCard {...mockProps} />);
    
    const image = screen.getByAltText('John Doe');
    expect(image).toBeInTheDocument();
    expect(image.tagName).toBe('IMG');
    expect(image.getAttribute('src')).toBe('https://example.com/profile.jpg');
  });

  it('applies appropriate structure with image above text content', () => {
    const { container } = render(<BioCard {...mockProps} />);
    
    // Get the main container element
    const bioCardElement = container.firstChild;
    
    // Check if it has the expected className
    expect(bioCardElement).toHaveClass('bio-card');
    
    // Check the order of child elements using their position in the DOM
    const childElements = container.firstChild?.childNodes;
    expect(childElements?.[0].nodeName).toBe('IMG'); // First child should be image
    
    // The text content should come after the image
    const textContentIndex = Array.from(childElements || []).findIndex(
      node => node.textContent?.includes('John Doe')
    );
    
    expect(textContentIndex).toBeGreaterThan(0); // Text content should come after image
  });
});
