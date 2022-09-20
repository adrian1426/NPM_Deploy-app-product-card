import React from 'react';
import renderer from 'react-test-renderer';
import CardTitle from '../../../../src/components/common/card/CardTitle';

describe('CardTitle', () => {
  test('should render CardTitle', () => {
    const wrapper = renderer.create(
      <CardTitle>Mi titulo</CardTitle>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});