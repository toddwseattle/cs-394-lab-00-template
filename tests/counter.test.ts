// Counter.test.tsx
import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Counter } from '../src/components/Counter';

describe('Counter Component', () => {
  it('renders with initial value of 0', () => {
    render(<Counter />);
    expect(screen.getByText('Count: 0')).toBeInTheDocument();
  });

  it('increments the count when + button is clicked', () => {
    render(<Counter />);
    fireEvent.click(screen.getByText('+'));
    expect(screen.getByText('Count: 1')).toBeInTheDocument();
  });

  it('decrements the count when - button is clicked', () => {
    render(<Counter />);
    // First increment so we don't go negative
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('+'));
    expect(screen.getByText('Count: 2')).toBeInTheDocument();
    
    // Now decrement
    fireEvent.click(screen.getByText('-'));
    expect(screen.getByText('Count: 1')).toBeInTheDocument();
  });

  it('resets the count when Reset button is clicked', () => {
    render(<Counter />);
    // First increment a few times
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('+'));
    expect(screen.getByText('Count: 2')).toBeInTheDocument();
    
    // Now reset
    fireEvent.click(screen.getByText('Reset'));
    expect(screen.getByText('Count: 0')).toBeInTheDocument();
  });

  it('accepts and uses initialValue prop', () => {
    render(<Counter initialValue={10} />);
    expect(screen.getByText('Count: 10')).toBeInTheDocument();
    
    // Increment
    fireEvent.click(screen.getByText('+'));
    expect(screen.getByText('Count: 11')).toBeInTheDocument();
    
    // Reset should go back to initialValue, not 0
    fireEvent.click(screen.getByText('Reset'));
    expect(screen.getByText('Count: 10')).toBeInTheDocument();
  });
});
