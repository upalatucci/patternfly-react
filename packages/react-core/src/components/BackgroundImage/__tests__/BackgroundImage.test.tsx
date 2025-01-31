import { BackgroundImage } from '../BackgroundImage';
import * as React from 'react';
import { render } from '@testing-library/react';

const images = {
  'lg': '/assets/images/pfbg_1200.jpg',
  'sm': '/assets/images/pfbg_768.jpg',
  'sm2x': '/assets/images/pfbg_768@2x.jpg',
  'xs': '/assets/images/pfbg_576.jpg',
  'xs2x': '/assets/images/pfbg_576@2x.jpg'
};

test('BackgroundImage', () => {
  const view = render(<BackgroundImage src={images} />);
  expect(view.container).toMatchSnapshot();
});

test('allows passing in a single string as the image src', () => {
  const view = render(<BackgroundImage src={images.lg} />);
  expect(view.container).toMatchSnapshot();
});
