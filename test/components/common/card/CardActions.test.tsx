import React from 'react';
import renderer from 'react-test-renderer';
import CardActions from '../../../../src/components/common/card/CardActions';

describe('CardActions', () => {
  test('should render CardActions', () => {
    const wrapper = renderer.create(
      <CardActions />
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});