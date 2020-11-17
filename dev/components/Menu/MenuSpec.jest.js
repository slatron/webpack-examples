import React from 'react';
import renderer from 'react-test-renderer';
import Menu from './Menu';

describe('Menu Display Test > ', () => {
  test('Renders Active Class Passed as current', () => {
    const MenuComponent = renderer.create(<Menu current="contact" />);
    let tree = MenuComponent.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
