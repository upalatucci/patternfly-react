/**
 * This test was generated
 */
import * as React from 'react';
import { render } from '@testing-library/react';
import { Card } from '../../Card';
// any missing imports can usually be resolved by adding them here
import {} from '../..';

it('Card should match snapshot (auto-generated)', () => {
  const view = render(
    <Card children={<>ReactNode</>} className={"''"} component={'article'} isHoverable={false} isCompact={false} />
  );
  expect(view.container).toMatchSnapshot();
});
