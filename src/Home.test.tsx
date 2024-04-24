import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';
import { useGetAllPokemonQuery } from './services/pokemon';

jest.mock('./services/pokemon', () => ({
  useGetAllPokemonQuery: jest.fn(),
}));

const mockData = {
  data: {
    results: [
      { name: 'bulbasaur' },
      { name: 'charmander' },
      { name: 'squirtle' },
    ],
  },
};

describe('Home Component', () => {
  beforeEach(() => {
    useGetAllPokemonQuery({
      data: mockData,
      isLoading: false,
      isError: false,
    });
  });

  test('renders all Pokemon names', async () => {
    render(<Home />);
    const pokemonNames = screen.getAllByRole('link', { name: /bulbasaur|charmander|squirtle/i });
    expect(pokemonNames).toHaveLength(3);
  });

  test('renders Pokemon names as links', async () => {
    render(<Home />);
    const pokemonLinks = screen.getAllByRole('link', { name: /bulbasaur|charmander|squirtle/i });
    expect(pokemonLinks[0]).toHaveAttribute('href', '/details/1');
    expect(pokemonLinks[1]).toHaveAttribute('href', '/details/2');
    expect(pokemonLinks[2]).toHaveAttribute('href', '/details/3');
  });
});
