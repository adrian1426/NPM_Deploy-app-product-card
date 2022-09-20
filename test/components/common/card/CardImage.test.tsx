import React from 'react';
import renderer from 'react-test-renderer';
import CardImage from '../../../../src/components/common/card/CardImage';

describe('CardImage', () => {
  test('should render CardImage', () => {
    const wrapper = renderer.create(
      <CardImage />
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});