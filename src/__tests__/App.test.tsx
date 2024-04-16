import { expect, it, describe } from 'vitest';
import { screen, fireEvent } from '@testing-library/react';

import { render } from '../utils/test-utils';
import App from '../App';

describe('Search Username Deel', () => {
  it('should render <App /> title properly', () => {
    const { getByText } = render(<App />);

    expect(getByText('Search Username Deel')).toBeDefined();
    expect(getByText('Please type a username')).toBeDefined();
  });

  it('should display an error message when query length is less than 2 characters', () => {
    const { getByText } = render(<App />);
    const input = screen.getAllByTestId('search-username')[0];

    fireEvent.change(input, { target: { value: 'a' } });

    expect(getByText('Minimum 2 characters required')).toBeDefined();
    expect(getByText('User not found :/')).toBeDefined();
  });

  it('should display an error message when query length is greater than 30 characters', () => {
    const { getByText } = render(<App />);
    const input = screen.getAllByTestId('search-username')[0];

    fireEvent.change(input, {
      target: { value: 'A very big username to search on this application' },
    });

    expect(getByText('Maximum of 30 characters exceeded')).toBeDefined();
    expect(getByText('User not found :/')).toBeDefined();
  });

  it('should display `user not found` when there is not a username match', () => {
    const { getByText } = render(<App />);
    const input = screen.getAllByTestId('search-username')[0];

    fireEvent.change(input, {
      target: { value: 'Gabriel Rosa' },
    });

    expect(getByText('User not found :/')).toBeDefined();
  });

  it('should display all the matching usernames based on the user input', async () => {
    render(<App />);
    const input = screen.getAllByTestId('search-username')[0];

    fireEvent.change(input, {
      target: { value: 'th' },
    });

    const results = await screen.findAllByTestId('usernames-result');

    expect(results).toHaveLength(6);
  });
});
