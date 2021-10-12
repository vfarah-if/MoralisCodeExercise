import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Button from './Button';

describe('button', () => {
  test('should create a button with a primary Button display name', () => {
    const { container } = render(
      <Button displayName='Button' primary={true} />
    );

    expect(screen.getByRole('button')).toHaveTextContent('Button');
    expect(container.querySelector('button')).toMatchSnapshot();
  });

  test('should create a button simple Button display name', () => {
    const renderResponse = render(<Button displayName='Button' />);

    expect(renderResponse.container.querySelector('button')).toMatchSnapshot();
  });

  test('should create a button large Button display name', () => {
    const renderResponse = render(<Button displayName='Button' size='large' />);

    expect(renderResponse.container.querySelector('button')).toMatchSnapshot();
  });

  test('should create a button small Button display name', () => {
    const renderResponse = render(<Button displayName='Button' size='small' />);

    expect(renderResponse.container.querySelector('button')).toMatchSnapshot();
  });
});
