import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import Details from './Details';

jest.mock('./services/pokemon', () => ({
  useGetPokemonByIdQuery: jest.fn(),
}));

describe('Details Component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders details correctly when data is available', async () => {
    const mockParams = { id: '1' };
    const mockResponse = {
      data: {
        id: '1',
        name: 'Pikachu',
        height: 4,
        weight: 60,
        types: [{ type: { name: 'Electric' } }],
      },
    };

    jest.spyOn(React, 'useEffect').mockImplementationOnce((effect) => effect());

    const useParamsMock = jest.fn().mockReturnValue(mockParams);
    const useGetPokemonByIdQueryMock = jest.fn().mockReturnValue(mockResponse);

    render(
      <MemoryRouter initialEntries={['/details/1']}>
        <Details />
      </MemoryRouter>,
    );

    await waitFor(() => {
      expect(screen.getByText('Name:')).toBeInTheDocument();
      expect(screen.getByText('Pikachu')).toBeInTheDocument();
      expect(screen.getByText('Height:')).toBeInTheDocument();
      expect(screen.getByText('4')).toBeInTheDocument();
      expect(screen.getByText('Weight:')).toBeInTheDocument();
      expect(screen.getByText('60')).toBeInTheDocument();
      expect(screen.getByText('Types:')).toBeInTheDocument();
      expect(screen.getByText('Electric')).toBeInTheDocument();
    });
  });

  test('navigates back home when "Back Home" button is clicked', async () => {
    const mockParams = { id: '1' };
    const useHistoryMock = jest.fn();

    const { container } = render(
      <MemoryRouter initialEntries={['/details/1']}>
        <Details />
      </MemoryRouter>,
  
    );

    const backButton = container.querySelector('button');


    expect(useHistoryMock).toHaveBeenCalledTimes(1);
    expect(useHistoryMock).toHaveBeenCalledWith();
  });
});